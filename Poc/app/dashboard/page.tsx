'use client';

import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import NeedsTable from '../components/NeedsTable';
import GroupResult from '../components/GroupResult';
import ChatbotWidget from '../components/ChatbotWidget';
import VendorCard from '../components/VendorCard';
import StatusCard from '../components/StatusCard';
import ForecastChart from '../components/ForecastChart';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  // Placeholder state and data
  const [needs, setNeeds] = useState<any[]>([
    { id: 1, item: 'Kopi Arabika Gayo', quantity: '50', unit: 'kg' },
    { id: 2, item: 'Kemasan Kopi 250g', quantity: '1000', unit: 'pcs' },
  ]);
  const [showGroupResult, setShowGroupResult] = useState(false);

  const handleProcessGroup = () => {
    // In a real app, this would trigger a backend process.
    // Here, we'll just simulate the result being ready.
    setShowGroupResult(true);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-8 bg-slate-900">
        {/* Forecast Chart */}
        <div className="mb-8">
          <ForecastChart />
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatusCard title="Jumlah Order Kolektif" value="24" />
          <StatusCard title="Total Penghematan" value="Rp 12.5M" />
          <StatusCard title="Pesanan Aktif" value="5" />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <InputForm setNeeds={setNeeds} />
            <NeedsTable needs={needs} setNeeds={setNeeds} onProcessGroup={handleProcessGroup} />
            {showGroupResult && <GroupResult />}
          </div>
          <div className="space-y-8">
            <VendorCard />
          </div>
        </div>

        {/* Floating Chatbot Widget */}
        <ChatbotWidget />
      </main>
    </div>
  );
}
