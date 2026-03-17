'use client';

'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import NeedsList from '@/app/components/NeedsList';
import ForecastChart from '@/app/components/ForecastChart';
import { Lightbulb, Bell } from 'lucide-react';

// Tipe data untuk setiap kebutuhan
export interface Need {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  deadline: string;
  specs: string;
  status: 'Draf' | 'Masuk Grup' | 'Selesai';
}

// Data dummy awal
const initialNeeds: Need[] = [
  {
    id: 1,
    name: 'Kopi Robusta Grade A',
    quantity: 50,
    unit: 'kg',
    deadline: '3 hari lagi',
    specs: 'Biji kopi utuh, medium roast',
    status: 'Draf',
  },
  {
    id: 2,
    name: 'Kemasan Kopi (Standing Pouch)',
    quantity: 1000,
    unit: 'pcs',
    deadline: '1 minggu lagi',
    specs: 'Ukuran 250g, dengan katup & zipper',
    status: 'Masuk Grup',
  },
  {
    id: 3,
    name: 'Jasa Desain Logo',
    quantity: 1,
    unit: 'paket',
    deadline: '2 minggu lagi',
    specs: 'Desain logo untuk brand kopi baru',
    status: 'Selesai',
  },
];

const NeedsPage = () => {
  const [needs, setNeeds] = useState<Need[]>(initialNeeds);

  const handleDelete = (id: number) => {
    // Simulasi konfirmasi dan toast notification
    if (window.confirm('Apakah Anda yakin ingin menghapus kebutuhan ini?')) {
      setNeeds(needs.filter((need) => need.id !== id));
      alert('Kebutuhan berhasil dihapus!'); // Placeholder untuk toast
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Kebutuhan & Peramalan</h1>
          <button className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-colors duration-300">
            + Tambah Kebutuhan
          </button>
        </div>

        {/* Forecasting Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ForecastChart />
          </div>
          <div className="flex flex-col space-y-6">
            <div className="glass-card p-5 rounded-xl flex-grow">
              <div className="flex items-center mb-3">
                <Lightbulb className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <h4 className="font-bold text-white">Saran AI</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Permintaan <strong>Kopi Robusta</strong> biasanya meningkat <strong>15%</strong> di bulan Agustus. Pertimbangkan untuk membeli lebih awal.
              </p>
            </div>
            <div className="glass-card p-5 rounded-xl flex-grow">
              <div className="flex items-center mb-3">
                <Bell className="text-cyan-400 mr-3 flex-shrink-0" size={20} />
                <h4 className="font-bold text-white">Notifikasi Prediktif</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Potensi harga terendah untuk <strong>Kemasan Kopi</strong> adalah sebelum <strong>10 Agustus</strong>.
              </p>
            </div>
          </div>
        </div>

        <NeedsList needs={needs} onDelete={handleDelete} />
      </main>
    </div>
  );
};

export default NeedsPage;
