/* ==========================================================
 * Program Perbaikan Kode Kedai Senja
 * ========================================================== */

let namaKedai = "Kedai Senja"; // FIX: Ubah const menjadi let agar bisa diubah di baris bawah
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2; // FIX: Ubah string "2" menjadi angka 2 agar tidak terjadi string concatenation
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
let subtotal = (HARGA_KOPI * jumlahKopi) + (HARGA_ROTI * jumlahRoti); // FIX: Perbaiki typo 'jumlahkopi' menjadi 'jumlahKopi'

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK; // FIX: Tambahkan tanda kurung agar pengurangan diskon didahulukan sebelum dikali tarif pajak

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar; // FIX: Gunakan operator perbandingan >= alih-alih assignment (=)

// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar; // FIX: Urutan benar adalah uangBayar dikurangi totalBayar

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0; // FIX: Gunakan === 0 untuk cek genap, bukan === 1

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai += 1; // FIX: Gunakan operator penugasan (+= 1) agar nilainya tersimpan

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
namaKedai = "Kedai Senja Baru"; // FIX: Hapus deklarasi let di depan karena variabel sudah dideklarasikan di atas

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// TARIF_PAJAK = 0.12; // FIX: Hapus baris ini karena variabel const tidak boleh diubah nilainya

console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);

/*
CATATAN BUG:
1. `let jumlahRoti = "2";` -> Jenis: Tidak error tapi hasil salah. Penyebab: Terjadi type coercion (penggabungan string) pada penjumlahan.
2. `jumlahkopi` -> Jenis: Menghentikan program dengan error (ReferenceError). Penyebab: Salah penulisan huruf besar/kecil (case-sensitive).
3. `subtotal - 10000 * TARIF_PAJAK` -> Jenis: Tidak error tapi hasil salah. Penyebab: Urutan prioritas operator matematika (perkalian didahulukan).
4. `uangBayar = totalBayar` -> Jenis: Tidak error tapi hasil salah. Penyebab: Menggunakan operator assignment (=) alih-alih perbandingan (>=).
5. `totalBayar - uangBayar` -> Jenis: Tidak error tapi hasil salah. Penyebab: Urutan pengurangan terbalik sehingga hasilnya negatif.
6. `TARIF_PAJAK = 0.12` -> Jenis: Menghentikan program dengan error (TypeError). Penyebab: Mencoba mengubah nilai dari variabel yang dideklarasikan dengan const.
*/