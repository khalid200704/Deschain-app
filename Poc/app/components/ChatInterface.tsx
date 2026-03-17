'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SendHorizonal, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

type ResponseHandler = (input: string) => string;

interface Rule {
  keywords: string[];
  response: string | ResponseHandler;
  exactMatch?: boolean;
  context?: string;
}

const rules: Rule[] = [
  // Greetings
  {
    keywords: ['hallo', 'hai', 'hi', 'hey', 'halo'],
    response: 'Halo! Saya asisten virtual Deschain. Ada yang bisa saya bantu?',
    exactMatch: true,
    context: 'greeting'
  },
  
  // Vendor-related queries
  {
    keywords: ['rekomendasi vendor', 'vendor terbaik', 'rekomendasi supplier'],
    response: (input: string) => {
      if (input.includes('kopi')) {
        return 'Berikut rekomendasi vendor kopi terbaik:\n1. Kopi Mantap (Rating: 4.8/5.0)\n2. Kopi Nusantara (Rating: 4.7/5.0)\n3. Kopi Sejahtera (Rating: 4.6/5.0)';
      }
      if (input.includes('gula')) {
        return 'Berikut rekomendasi vendor gula terbaik:\n1. Gula Manis (Rating: 4.7/5.0)\n2. Gula Nusantara (Rating: 4.6/5.0)';
      }
      return 'Berikut beberapa vendor terbaik:\n1. Vendor A (Rating: 4.8/5.0)\n2. Vendor B (Rating: 4.7/5.0)';
    },
    context: 'vendor_recommendation'
  },
  
  // Price inquiries
  {
    keywords: ['harga', 'berapa harga', 'harga berapa'],
    response: (input: string) => {
      if (input.includes('kopi')) return 'Harga kopi saat ini Rp120.000/kg untuk pembelian minimal 5kg.';
      if (input.includes('gula')) return 'Harga gula aren saat ini Rp45.000/kg.';
      return 'Produk apa yang ingin Anda tanyakan harganya? Contoh: "Berapa harga kopi?"';
    },
    context: 'price_inquiry'
  },
  
  // Group purchase
  {
    keywords: ['grup beli', 'pembelian kolektif', 'grup pengadaan'],
    response: 'Saat ini tersedia grup beli untuk:\n1. Kopi Arabica (min. 10kg)\n2. Gula Aren (min. 20kg)\n3. Kemasan (min. 50pcs)\n\nAnda tertarik untuk bergabung?',
    context: 'group_purchase'
  },
  
  // Thank you responses
  {
    keywords: ['terima kasih', 'makasih', 'thanks'],
    response: 'Sama-sama! Ada lagi yang bisa saya bantu?',
    exactMatch: true,
    context: 'gratitude'
  },
  
  // Help
  {
    keywords: ['bantuan', 'help', 'bisa bantu apa'],
    response: 'Saya bisa membantu dengan:\n- Mencari rekomendasi vendor\n- Menanyakan harga produk\n- Informasi grup beli\n- Status pengiriman\n\nAda yang bisa saya bantu?',
    exactMatch: true,
    context: 'help'
  }
];

// Default response when no rules match
const defaultResponses = [
  'Maaf, saya tidak mengerti pertanyaan Anda. Coba tanyakan tentang rekomendasi vendor, harga, atau grup beli.',
  'Saya belum paham maksud Anda. Bisa diulangi dengan kalimat yang berbeda?',
  'Mohon maaf, saya hanya bisa membantu dengan pertanyaan seputar pengadaan dan vendor.'
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Selamat datang di Asisten AI Deschain! Ada yang bisa saya bantu?', sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // Check for exact matches first
    const exactMatch = rules.find(rule => 
      rule.exactMatch && 
      rule.keywords.some(keyword => 
        lowerInput.split(/\s+/).includes(keyword.toLowerCase())
      )
    );
    
    if (exactMatch) {
      return typeof exactMatch.response === 'function' 
        ? exactMatch.response(userInput)
        : exactMatch.response;
    }

    // Check for partial matches
    for (const rule of rules) {
      if (rule.keywords.some(keyword => lowerInput.includes(keyword.toLowerCase()))) {
        return typeof rule.response === 'function' 
          ? rule.response(userInput)
          : rule.response;
      }
    }

    // Return random default response if no rules match
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Get AI response based on rules
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(input),
        sender: 'ai',
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const quickAsks = [
    'Kapan terbaik beli bahan baku?',
    'Cara bergabung grup?',
    'Apa itu lot sizing EOQ?',
    'Vendor terbaik untuk kopi bubuk?',
  ];

  const handleQuickAsk = (text: string) => {
    setInput(text);
    setTimeout(() => handleSend(), 0);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} />
                </div>
              )}
              <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-slate-800 text-slate-200 rounded-bl-none'
                  }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-end gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} />
                </div>
                <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3">
                    <motion.div className="flex space-x-1">
                        <motion.span className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }} />
                        <motion.span className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.1, repeat: Infinity, ease: 'easeInOut' }} />
                        <motion.span className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }} />
                    </motion.div>
                </div>
            </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-slate-800">
        <div className="mb-3 flex flex-wrap gap-2">
          {quickAsks.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => handleQuickAsk(q)}
              className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-500/60 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              title="Tanyakan cepat"
            >
              {q}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ketik pesan Anda..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pl-4 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow duration-300"
          />
          <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full text-slate-400 hover:bg-cyan-500 hover:text-white transition-colors duration-300">
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
