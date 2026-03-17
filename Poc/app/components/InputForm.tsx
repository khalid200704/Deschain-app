'use client';

import React from 'react';

interface InputFormProps {
  setNeeds: React.Dispatch<React.SetStateAction<any[]>>;
}

const InputForm: React.FC<InputFormProps> = ({ setNeeds }) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newNeed = {
      id: Date.now(),
      item: formData.get('item'),
      quantity: formData.get('quantity'),
      unit: formData.get('unit'),
      price: formData.get('price'),
    };
    // In a real app, you'd have better state management
    setNeeds(prevNeeds => [...prevNeeds, newNeed]);
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-4 rounded-xl bg-slate-900/70 p-6 shadow-lg ring-1 ring-slate-800"
    >
      <h3 className="text-lg font-semibold text-slate-50">
        Tambah Kebutuhan Pengadaan
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="md:col-span-2 space-y-1">
          <label
            htmlFor="item"
            className="text-sm font-medium text-slate-200"
          >
            Nama Barang
          </label>
          <input
            type="text"
            name="item"
            id="item"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="misal: Kursi Kerja Ergonomis"
            required
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="quantity"
            className="text-sm font-medium text-slate-200"
          >
            Jumlah
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="misal: 100"
            min={1}
            required
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="unit"
            className="text-sm font-medium text-slate-200"
          >
            Satuan
          </label>
          <input
            type="text"
            name="unit"
            id="unit"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="misal: pcs, kg, box"
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 md:w-auto"
        >
          Tambah Kebutuhan
        </button>
      </div>
    </form>
  );
};

export default InputForm;
