'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const dummyData = [
  { name: 'Mei', Kebutuhan: 400, Prediksi: 400 },
  { name: 'Jun', Kebutuhan: 300, Prediksi: 300 },
  { name: 'Jul', Kebutuhan: 450, Prediksi: 450 },
  { name: 'Agu', Kebutuhan: 470, Prediksi: 470 },
  { name: 'Sep', Kebutuhan: 520, Prediksi: 520 },
  { name: 'Okt', Kebutuhan: null, Prediksi: 580 },
  { name: 'Nov', Kebutuhan: null, Prediksi: 620 },
  { name: 'Des', Kebutuhan: null, Prediksi: 750 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 rounded-lg text-sm">
        <p className="label font-bold text-white">{`${label}`}</p>
        {payload.map((pld: any, index: number) => (
            <p key={index} style={{ color: pld.color }}>
                {`${pld.name}: ${pld.value}`}
            </p>
        ))}
      </div>
    );
  }

  return null;
};

const ForecastChart = () => {
  return (
    <div className="glass-card p-6 rounded-xl h-80">
        <h3 className="text-lg font-bold text-white mb-4">Prediksi Kebutuhan (kg/bulan)</h3>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dummyData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
                <defs>
                    <linearGradient id="colorKebutuhan" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPrediksi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00f6ff" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#00f6ff" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="Kebutuhan" stroke="#8884d8" strokeWidth={2} fillOpacity={1} fill="url(#colorKebutuhan)" />
                <Area type="monotone" dataKey="Prediksi" stroke="#00f6ff" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorPrediksi)" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
