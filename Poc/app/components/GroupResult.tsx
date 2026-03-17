import React from 'react';

const GroupResult = () => {
  // Placeholder data for demonstration
  const demoGroups = [
    {
      id: 1,
      name: 'Grup Kebutuhan Kopi',
      members: 3,
      product: 'Biji Kopi Arabika Gayo',
      potentialSavings: '18%'
    },
    {
      id: 2,
      name: 'Grup Kemasan Produk',
      members: 5,
      product: 'Kemasan Kopi 250g',
      potentialSavings: '22%'
    }
  ];

  return (
    <div className="card-base p-6" style={{ backgroundColor: 'var(--card-background-color)', boxShadow: 'var(--shadow-soft)' }}>
      <h3 className="form-title mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-color)' }}>Hasil Pencocokan Grup</h3>
      <div className="space-y-4">
        {demoGroups.map((group) => (
          <div key={group.id} className="card-nested p-4 rounded-lg" style={{ backgroundColor: 'var(--background-color)', border: '1px solid var(--border-color)' }}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-lg" style={{ color: 'var(--primary-color)' }}>{group.name}</h4>
                <p className="text-sm" style={{ color: 'var(--text-color-secondary)' }}>{group.product}</p>
              </div>
              <span className="badge-success text-sm font-medium">Hemat: {group.potentialSavings}</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-color-secondary)' }}>{group.members} anggota grup</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupResult;
