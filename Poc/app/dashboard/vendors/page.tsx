'use client';

import { useState, useMemo } from 'react';
import Sidebar from '@/app/components/Sidebar';
import VendorList from '@/app/components/VendorList'; // Akan kita buat

export interface Vendor {
  id: number;
  name: string;
  location: string;
  category: 'Bahan Baku' | 'Kemasan' | 'Jasa' | 'Peralatan';
  rating: number;
  isRecommended: boolean;
  hargaPerSatuan: number;
  satuanHarga: string;
  moq: number;
  statusNib: 'Terverifikasi' | 'Proses';
  diskonKolektif: string;
}

const initialVendors: Vendor[] = [
  {
    id: 1,
    name: 'Vendor Kopi Jaya',
    location: 'Bandung',
    category: 'Bahan Baku',
    rating: 4.8,
    isRecommended: true,
    hargaPerSatuan: 79000,
    satuanHarga: 'kg',
    moq: 25,
    statusNib: 'Terverifikasi',
    diskonKolektif: 'Diskon kolektif hingga 12% jika pembelian grup ≥ 100 kg.',
  },
  {
    id: 2,
    name: 'Supplier Pack Indonesia',
    location: 'Jakarta',
    category: 'Kemasan',
    rating: 4.5,
    isRecommended: false,
    hargaPerSatuan: 1450,
    satuanHarga: 'pcs',
    moq: 500,
    statusNib: 'Proses',
    diskonKolektif: 'Diskon kolektif 5% jika pembelian grup ≥ 2.000 pcs.',
  },
  {
    id: 3,
    name: 'Mesin Kopi Handal',
    location: 'Surabaya',
    category: 'Peralatan',
    rating: 4.7,
    isRecommended: true,
    hargaPerSatuan: 1850000,
    satuanHarga: 'unit',
    moq: 1,
    statusNib: 'Terverifikasi',
    diskonKolektif: 'Diskon kolektif 7% jika pembelian grup ≥ 5 unit.',
  },
  {
    id: 4,
    name: 'Jasa Desain Kreatif',
    location: 'Yogyakarta',
    category: 'Jasa',
    rating: 4.9,
    isRecommended: false,
    hargaPerSatuan: 950000,
    satuanHarga: 'paket',
    moq: 1,
    statusNib: 'Proses',
    diskonKolektif: 'Diskon kolektif 10% jika pemesanan grup ≥ 3 paket.',
  },
  {
    id: 5,
    name: 'Sumber Biji Nusantara',
    location: 'Medan',
    category: 'Bahan Baku',
    rating: 4.6,
    isRecommended: false,
    hargaPerSatuan: 76000,
    satuanHarga: 'kg',
    moq: 20,
    statusNib: 'Terverifikasi',
    diskonKolektif: 'Diskon kolektif 8% jika pembelian grup ≥ 80 kg.',
  },
  {
    id: 6,
    name: 'Box Master Premium',
    location: 'Jakarta',
    category: 'Kemasan',
    rating: 4.4,
    isRecommended: true,
    hargaPerSatuan: 3200,
    satuanHarga: 'pcs',
    moq: 300,
    statusNib: 'Terverifikasi',
    diskonKolektif: 'Diskon kolektif 6% jika pembelian grup ≥ 1.500 pcs.',
  },
];

const VendorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');

  const filteredVendors = useMemo(() => {
    return initialVendors
      .filter((vendor) =>
        vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((vendor) =>
        categoryFilter === 'Semua' ? true : vendor.category === categoryFilter
      );
  }, [searchQuery, categoryFilter]);

  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Rekomendasi Vendor</h1>
        
        {/* Pencarian & Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Cari nama vendor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 lg:w-1/3 bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full sm:w-auto bg-slate-800 border border-slate-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option>Semua</option>
            <option>Bahan Baku</option>
            <option>Kemasan</option>
            <option>Jasa</option>
            <option>Peralatan</option>
          </select>
        </div>

        <VendorList vendors={filteredVendors} />
      </main>
    </div>
  );
};

export default VendorsPage;
