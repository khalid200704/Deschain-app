'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import GroupList from '@/app/components/GroupList';
import LotSizingSummary from '@/app/components/LotSizingSummary';

export interface Group {
  id: number;
  name: string;
  memberCount: number;
  currentAmount: number; // Renamed from totalVolume for clarity
  moq: number; // Minimum Order Quantity
  estimatedDiscount: number;
  vendor: string;
  progress: number; // 0 to 100
  statusText: 'Pembentukan' | 'Menunggu Pembayaran' | 'Dalam Pengiriman' | 'Selesai';
  isJoined: boolean;
}

const initialGroups: Group[] = [
  {
    id: 1,
    name: 'Kopi Robusta Grade A Batch #1',
    memberCount: 5,
    currentAmount: 85,
    moq: 100,
    estimatedDiscount: 15,
    vendor: 'Vendor Kopi Jaya',
    progress: 85, // Progress now reflects currentAmount/moq
    statusText: 'Pembentukan',
    isJoined: true,
  },
  {
    id: 2,
    name: 'Kemasan Kopi 250g Batch #3',
    memberCount: 12,
    currentAmount: 1250,
    moq: 1000,
    estimatedDiscount: 20,
    vendor: 'Supplier Pack Indonesia',
    progress: 100,
    statusText: 'Dalam Pengiriman',
    isJoined: true,
  },
  {
    id: 3,
    name: 'Gula Aren Cair Premium',
    memberCount: 3,
    currentAmount: 30,
    moq: 50,
    estimatedDiscount: 10,
    vendor: 'Petani Gula Aren Lokal',
    progress: 60,
    statusText: 'Pembentukan',
    isJoined: false,
  },
];

const GroupsPage = () => {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [showLotSizing, setShowLotSizing] = useState(false);

  const handleToggleJoin = (id: number) => {
    setGroups(
      groups.map((group) =>
        group.id === id ? { ...group, isJoined: !group.isJoined } : group
      )
    );
  };

  const handleProcessAndShowSummary = () => {
    // In a real app, this would trigger backend logic.
    // Here, we just reveal the summary component.
    setShowLotSizing(true);
  };

  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Grup & Ukuran Lot</h1>
          {!showLotSizing && (
            <button 
              onClick={handleProcessAndShowSummary}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300"
            >
              Proses Grup & Lihat Ringkasan Lot
            </button>
          )}
        </div>

        {showLotSizing && (
          <div className="mb-8">
            <LotSizingSummary />
          </div>
        )}

        <GroupList groups={groups} onToggleJoin={handleToggleJoin} />
      </main>
    </div>
  );
};

export default GroupsPage;
