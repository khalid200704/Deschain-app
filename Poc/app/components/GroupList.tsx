'use client';

import { motion } from 'framer-motion';
import { Users, Package, Percent, LogIn, LogOut, AlertTriangle } from 'lucide-react';
import { Group } from '../dashboard/groups/page';

interface GroupListProps {
  groups: Group[];
  onToggleJoin: (id: number) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const GroupList = ({ groups, onToggleJoin }: GroupListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group, i) => (
        <motion.div
          key={group.id}
          className="glass-card rounded-xl p-6 flex flex-col justify-between h-full hover:shadow-cyan-500/10 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{group.name}</h3>
            <p className="text-sm text-slate-400 mb-4">oleh {group.vendor}</p>

            <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
              <div className="flex flex-col items-center">
                <Users className="text-cyan-400 mb-1" size={20} />
                <span className="font-bold text-white">{group.memberCount}</span>
                <span className="text-slate-400">Anggota</span>
              </div>
              <div className="flex flex-col items-center">
                <Package className="text-cyan-400 mb-1" size={20} />
                <span className="font-bold text-white">{group.currentAmount}/{group.moq}</span>
                <span className="text-slate-400">Volume</span>
              </div>
              <div className="flex flex-col items-center">
                <Percent className="text-cyan-400 mb-1" size={20} />
                <span className="font-bold text-white">~{group.estimatedDiscount}%</span>
                <span className="text-slate-400">Hemat</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
                <span>Progress Menuju MOQ</span>
                <span>{group.statusText}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${(group.currentAmount / group.moq) * 100}%` }}
                ></div>
              </div>
            </div>

            {group.currentAmount < group.moq && group.statusText === 'Pembentukan' && (
              <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg flex items-center text-xs">
                <AlertTriangle className="text-yellow-400 mr-2 flex-shrink-0" size={16} />
                <span className="text-yellow-300">
                  Butuh {group.moq - group.currentAmount} unit lagi untuk mencapai lot optimal.
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => onToggleJoin(group.id)}
            className="mt-6 w-full flex items-center justify-center py-2 px-4 rounded-lg font-semibold transition-colors duration-300 bg-cyan-500 text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
          >
            {group.isJoined ? (
              <><LogOut size={16} className="mr-2" /> Tinggalkan Grup</>
            ) : (
              <><LogIn size={16} className="mr-2" /> Gabung Grup</>
            )}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default GroupList;
