# Deschain-app

Deschain adalah platform SaaS pengadaan kolektif berbasis AI yang memungkinkan
UMKM dan koperasi Indonesia untuk:

- Menggabungkan kebutuhan pembelian bahan baku secara kolektif
- Membentuk grup pembelian otomatis berbasis algoritma AI
- Memilih vendor terbaik secara data-driven
- Membangun credit trail digital sebagai fondasi akses pembiayaan formal

**Masalah yang diselesaikan:** Dari 65,5 juta UMKM Indonesia, lebih dari 75%
membeli bahan baku secara individual dan tidak bisa memenuhi minimum order
quantity untuk harga grosir. Akibatnya mereka membayar 15-25% lebih mahal
dari yang seharusnya. Di sisi lain, 44 juta UMKM tidak bisa akses pembiayaan
formal karena tidak punya rekam jejak transaksi digital.

Deschain memotong dua inefisiensi ini sekaligus.

## Algoritma Inti (POC Aktif)

### 1. Group Matching — Dynamic Programming
**File:** `Grub_Pengadaan.ipynb`

Mengelompokkan UMKM berdasarkan kesamaan kebutuhan, lokasi geografis,
kuantitas, dan timeline pengadaan untuk memaksimalkan penghematan kolektif.
```
State: (jenis_barang, kuantitas, lokasi, timeline, budget)
Objective: Maksimalkan penghematan kolektif
Constraint: Memenuhi minimum order quantity vendor
```

### 2. Forecasting dan Lot Sizing — Time Series + Optimasi
**File:** `Forcasting_&_lot_sizing.ipynb`

Memprediksi waktu dan kuantitas pembelian optimal berdasarkan pola historis
untuk meminimalkan biaya penyimpanan sekaligus memenuhi MOQ.
