'use client';

import React, { useState } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="widget-container w-80 h-96 rounded-lg shadow-lg flex flex-col" style={{ backgroundColor: 'var(--card-background-color)', boxShadow: 'var(--shadow-soft)' }}>
          <div className="widget-header p-3 rounded-t-lg" style={{ backgroundColor: 'var(--primary-color)' }}>
            <h3 className="font-bold text-white">Asisten Deschain</h3>
          </div>
          <div className="flex-grow p-4 overflow-y-auto text-sm">
            {/* Chat messages would go here */}
            <div className="mb-2">
              <span className="chat-bubble-assistant rounded-lg px-3 py-2 inline-block" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>Halo! Ada yang bisa saya bantu hari ini?</span>
            </div>
          </div>
          <div className="p-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <input type="text" placeholder="Ketik pesan..." className="form-input w-full p-2" />
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn-fab rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-110" 
        style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      </button>
    </div>
  );
};

export default ChatbotWidget;
