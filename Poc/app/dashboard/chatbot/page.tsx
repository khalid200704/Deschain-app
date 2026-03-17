import Sidebar from '@/app/components/Sidebar';
import ChatInterface from '@/app/components/ChatInterface'; // Akan kita buat

const ChatbotPage = () => {
  return (
    <div className="flex h-screen bg-slate-900 text-white">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen">
        <div className="p-6 border-b border-slate-800">
            <h1 className="text-2xl font-bold text-white">Asisten AI</h1>
            <p className="text-sm text-slate-400">Tanyakan apa saja tentang pengadaan atau vendor.</p>
        </div>
        <ChatInterface />
      </main>
    </div>
  );
};

export default ChatbotPage;
