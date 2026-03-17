import React from 'react';

interface StatusCardProps {
  title: string;
  value: string | number;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{title}</h3>
      <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
    </div>
  );
};

export default StatusCard;
