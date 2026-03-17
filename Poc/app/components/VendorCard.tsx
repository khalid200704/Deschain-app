import React from 'react';

const VendorCard = () => {
  // Placeholder data
  const recommendedVendor = {
    name: 'PT Sinar Jaya Abadi',
    category: 'Alat Tulis Kantor',
    rating: 4.8,
    reviews: 125,
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Rekomendasi Vendor</h2>
      <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{recommendedVendor.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{recommendedVendor.category}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">{'★'.repeat(Math.round(recommendedVendor.rating))}{'☆'.repeat(5 - Math.round(recommendedVendor.rating))}</span>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{recommendedVendor.rating} ({recommendedVendor.reviews} ulasan)</span>
        </div>
        <button className="mt-4 w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:text-blue-400 dark:hover:text-white">
          Hubungi Vendor
        </button>
      </div>
    </div>
  );
};

export default VendorCard;
