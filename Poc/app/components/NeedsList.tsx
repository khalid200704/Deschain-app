import { Pencil, Trash2 } from 'lucide-react';
import { Need } from '../dashboard/needs/page'; // Impor tipe dari halaman

interface NeedsListProps {
  needs: Need[];
  onDelete: (id: number) => void;
}

// Fungsi untuk mendapatkan warna badge status
const getStatusBadgeColor = (status: Need['status']) => {
  switch (status) {
    case 'Draf':
      return 'bg-yellow-500/20 text-yellow-300';
    case 'Masuk Grup':
      return 'bg-blue-500/20 text-blue-300';
    case 'Selesai':
      return 'bg-green-500/20 text-green-300';
    default:
      return 'bg-gray-500/20 text-gray-300';
  }
};

const getStatusLabel = (status: Need['status']) => {
  switch (status) {
    default:
      return status;
  }
};

const NeedsList = ({ needs, onDelete }: NeedsListProps) => {
  return (
    <div className="space-y-4">
      {/* Tampilan Desktop - Tabel */}
      <div className="hidden md:block glass-card p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-3">Nama Barang</th>
              <th className="p-3">Jumlah</th>
              <th className="p-3">Waktu Butuh</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {needs.map((need) => (
              <tr key={need.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors duration-200 group">
                <td className="p-3">
                  <p className="font-semibold text-white">{need.name}</p>
                  <p className="text-sm text-slate-400 truncate max-w-xs">{need.specs}</p>
                </td>
                <td className="p-3 text-slate-300">{need.quantity} {need.unit}</td>
                <td className="p-3 text-slate-300">{need.deadline}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(need.status)}`}>
                    {getStatusLabel(need.status)}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <div className="flex justify-end items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all" title="Ubah Kebutuhan">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => onDelete(need.id)} className="p-2 text-slate-400 hover:text-red-500 hover:scale-110 transition-all" title="Hapus Kebutuhan">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tampilan Mobile - Card Stack */}
      <div className="md:hidden space-y-4">
        {needs.map((need) => (
          <div key={need.id} className="glass-card p-4 rounded-lg hover:shadow-cyan-500/10 transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white text-lg">{need.name}</h3>
                <p className="text-sm text-slate-400">{need.specs}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(need.status)}`}>
                {getStatusLabel(need.status)}
              </span>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <div className="text-slate-300">
                <p><span className="font-semibold">Jumlah:</span> {need.quantity} {need.unit}</p>
                <p><span className="font-semibold">Waktu:</span> {need.deadline}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-slate-400 hover:text-cyan-400" title="Ubah Kebutuhan">
                  <Pencil size={20} />
                </button>
                <button onClick={() => onDelete(need.id)} className="p-2 text-slate-400 hover:text-red-500" title="Hapus Kebutuhan">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedsList;
