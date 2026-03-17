import React from 'react';

interface NeedsTableProps {
  needs: { id: number; item: string; quantity: string; unit: string; }[];
  setNeeds: React.Dispatch<React.SetStateAction<any[]>>;
  onProcessGroup: () => void;
}

const NeedsTable: React.FC<NeedsTableProps> = ({ needs, setNeeds, onProcessGroup }) => {
  const handleDelete = (id: number) => {
    setNeeds(needs.filter(need => need.id !== id));
  };

  if (needs.length === 0) {
    return (
      <div
        className="card-base text-center p-8"
        style={{ backgroundColor: 'var(--card-background-color)', boxShadow: 'var(--shadow-soft)' }}
      >
        <p style={{ color: 'var(--text-color-secondary)' }}>
          Belum ada kebutuhan yang ditambahkan. Silakan gunakan formulir di atas
          untuk menambahkan kebutuhan.
        </p>
      </div>
    );
  }

  return (
    <div
      className="card-base p-6"
      style={{ backgroundColor: 'var(--card-background-color)', boxShadow: 'var(--shadow-soft)' }}
    >
      <h3
        className="form-title mb-4"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-color)' }}
      >
        Daftar Kebutuhan Saya
      </h3>
      <div className="overflow-x-auto">
        <table className="table-modern min-w-full">
          <thead>
            <tr>
              <th className="table-header">Nama Barang</th>
              <th className="table-header">Jumlah</th>
              <th className="table-header">Satuan</th>
              <th className="table-header text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
            {needs.map((need) => (
              <tr key={need.id} className="table-row">
                <td className="table-cell font-medium" style={{ color: 'var(--text-color)' }}>{need.item}</td>
                <td className="table-cell">{need.quantity}</td>
                <td className="table-cell">{need.unit}</td>
                <td className="table-cell text-right space-x-2">
                  <button className="btn-icon btn-secondary">Ubah</button>
                  <button
                    onClick={() => handleDelete(need.id)}
                    className="btn-icon btn-danger"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-right">
        <button
          onClick={onProcessGroup}
          className="btn btn-primary"
        >
          Proses Grup
        </button>
      </div>
    </div>
  );
};

export default NeedsTable;
