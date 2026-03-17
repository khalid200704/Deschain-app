'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Tag, Heart, MessageSquare } from 'lucide-react';
import { Vendor } from '../dashboard/vendors/page';

interface VendorListProps {
  vendors: Vendor[];
}

const formatRupiah = (value: number) => {
  try {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `Rp ${value.toLocaleString('id-ID')}`;
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const VendorList = ({ vendors }: VendorListProps) => {
  if (vendors.length === 0) {
    return <p className="text-slate-400 text-center">Tidak ada vendor yang cocok dengan pencarian Anda.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {vendors.map((vendor, i) => (
        <motion.div
          key={vendor.id}
          className="relative glass-card rounded-xl overflow-hidden flex flex-col h-full group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <div className="p-5 flex-grow">
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="text-xl font-bold text-white leading-snug">
                {vendor.name}
              </h3>
              {vendor.isRecommended && (
                <span className="mt-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-300 shadow-sm shadow-yellow-500/20 whitespace-nowrap">
                  Rekomendasi
                </span>
              )}
            </div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  vendor.statusNib === 'Terverifikasi'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}
              >
                {vendor.statusNib === 'Terverifikasi'
                  ? 'NIB Terverifikasi'
                  : 'Proses Verifikasi'}
              </span>
              <span className="text-xs text-slate-400">
                MOQ: <span className="font-semibold text-slate-200">{vendor.moq}</span>
              </span>
            </div>
            <div className="flex items-center text-sm text-slate-400 mb-1">
              <MapPin size={14} className="mr-2 flex-shrink-0" />
              <span>{vendor.location}</span>
            </div>
            <div className="flex items-center text-sm text-slate-400 mb-4">
              <Tag size={14} className="mr-2 flex-shrink-0" />
              <span>{vendor.category}</span>
            </div>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <div className="text-sm text-slate-300">
                <span className="text-slate-400">Harga:</span>{' '}
                <span className="font-semibold text-white">
                  {formatRupiah(vendor.hargaPerSatuan)}
                </span>
                <span className="text-slate-400"> / {vendor.satuanHarga}</span>
              </div>
            </div>
            <p className="mb-4 text-xs text-slate-300/90">
              {vendor.diskonKolektif}
            </p>
            <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  size={16}
                  className={starIndex < Math.round(vendor.rating) ? 'fill-current' : 'opacity-40'}
                />
              ))}
              <span className="text-white font-bold ml-2">{vendor.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="bg-slate-800/50 p-3 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors" title="Lihat Detail">
              <MessageSquare size={18} />
            </button>
            <button className="p-2 text-slate-400 hover:text-pink-500 transition-colors" title="Jadikan Favorit">
              <Heart size={18} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VendorList;
