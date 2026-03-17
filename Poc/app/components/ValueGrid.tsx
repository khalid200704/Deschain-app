import React from 'react';

const features = [
  {
    name: 'Pengelompokan Cerdas',
    description: 'AI kami secara otomatis mengelompokkan item kebutuhan Anda untuk efisiensi maksimal.',
    icon: '🧠',
  },
  {
    name: 'Rekomendasi Vendor',
    description: 'Dapatkan rekomendasi vendor yang paling sesuai dengan kebutuhan dan anggaran Anda.',
    icon: '🏆',
  },
  {
    name: 'Analisis Real-time',
    description: 'Pantau status pengadaan dan analisis pengeluaran Anda secara langsung dari dasbor.',
    icon: '📊',
  },
  {
    name: 'Proses Otomatis',
    description: 'Kurangi pekerjaan manual dengan otomatisasi proses dari permintaan hingga pemesanan.',
    icon: '🤖',
  },
];

const ValueGrid = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Kenapa Memilih Deschain?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Platform kami dirancang untuk mengatasi tantangan pengadaan modern.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;
