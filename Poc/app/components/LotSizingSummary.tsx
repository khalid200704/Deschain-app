'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PackageCheck, TrendingUp, AlertTriangle } from 'lucide-react';

// Dummy data for demonstration
const lotSizingData = {
  totalDemand: 85, // pcs
  vendorMOQ: 100, // pcs
  priceTiers: [
    { quantity: 100, discount: 20, price: 8000 },
    { quantity: 200, discount: 30, price: 7000 },
  ],
};

const chartData = [
  { name: 'Permintaan Saat Ini', value: lotSizingData.totalDemand },
  { name: 'Lot Optimal (Diskon 20%)', value: lotSizingData.priceTiers[0].quantity },
  { name: 'Lot Super (Diskon 30%)', value: lotSizingData.priceTiers[1].quantity },
];

const LotSizingSummary = () => {
  const optimalTier = lotSizingData.priceTiers[0];
  const needed = optimalTier.quantity - lotSizingData.totalDemand;

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center mb-4">
        <PackageCheck className="text-cyan-400 mr-3" size={24} />
        <h3 className="text-xl font-bold text-white">Ringkasan Lot Sizing Optimal</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart Visualization */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={120} tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid #334155', borderRadius: '0.5rem' }} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#6366f1' : '#06b6d4'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Summary & Recommendation */}
        <div className="space-y-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <div className="flex items-center">
              <TrendingUp size={18} className="mr-3 text-green-400" />
              <p className="text-slate-300 text-sm">
                Beli <strong>{optimalTier.quantity} pcs</strong> untuk diskon <strong>{optimalTier.discount}%</strong>.
                Harga per unit turun menjadi <strong>Rp {optimalTier.price.toLocaleString('id-ID')}</strong>.
              </p>
            </div>
          </div>
          <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
            <div className="flex items-center">
              <AlertTriangle size={18} className="mr-3 text-yellow-400" />
              <p className="text-yellow-300 text-sm">
                Butuh <strong>{needed} pcs</strong> lagi untuk mencapai lot optimal. Ajak UMKM lain bergabung!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotSizingSummary;
