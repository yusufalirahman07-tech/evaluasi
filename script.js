/* ==================================
* Program: Penacatat Tarnssaksi & Laporan Harian Kedai
* Nama: Muhammad Yusuf Ali Rahman
* Tanggal: 10 Oktober 2026
* Tujuan: Mengelolah data kedai, menu, transaksi, serta melakukan perhitungan kasir dan laporan harian UMKM
*/

// Data Kedai
const kedai = {
    nama: "Kedai Senja",
    pemilik: "Mas Rangga",
    kota: "Yogyakarta",
    tahunBerdiri: "2020",
    sedangBuka: "true",
    nomorWhatsApp: "081385766706",
    website: "null",
    jamOperasional: {
        buka: "08.00",
        tutup: "22.00"
    }

};

const menu = [
   { nama: "Kopi Susu Senja", kategori: "Minuman", harga: 18000, stok: 25, tersedia: true },
   { nama: "Kopi Hitam Wong Kito", kategori: "Minuman", harga: 15000, stok: 20, tersedia: true},
   { nama: "Roti Bakar Cokelat", kategori: "Makanan", harga: 15000, stok: 15, tersedia: true},
   { nama: "Pisang Goreng Keju", kategori: "Makanan", harga: 12000, stok: 10, tersedia: true},
   { nama: "Teh Tarik", kategori: "Minuman", harga: 10000, stok: 30, tersedia: true},
   { nama: "Es Jeruk Murni", kategori: "Minuman", harga: 12000, stok:0, tersedia: false},
];

const transaksi = [
    {
        kode: "TRX-001",
        pelanggan: "Mas Gusti",
        sudahMember: true,
        uangBayar: 100000,
        catatan: "kurangi es sedikit",
        pesanan: [
            {indeksMenu: 0, jumlah: 2},
            {indeksMenu: 2, jumlah: 1},
        ]
    },
    {
        kode: "TRX-002",
        pelanggan: "Mas Joko",
        sudahMember: false,
        uangBayar: 50000,
        catatan: "",
        pesanan: [
            { indeksMenu: 1, jumlah: 2},
            {indeksMenu: 4, jumlah: 1}
        ]
    },
    {
        kode: "TRX-003",
        pelanggan: "Mbak Ayu",
        sudahMember: true,
        uangBayar: 200000,
        catatan: "",
        pesanan: [
            { indeksMenu: 0, jumlah: 3},
            { indeksMenu: 3, jumlah: 2},
            { indeksMenu: 4, jumlah: 1},
        ]
    }
];

// --- Cetak ke Console ---
 console.log("Nama Kedai:",kedai.nama);
 console.log("Kota:", kedai["kota"]);
 console.log("Jam Tutup", kedai.jamOperasional.tutup);
 console.log("Menu Pertama:", menu[0].nama);
 console.log("Menu Terakhir:", menu[menu.length - 1].nama);
 console.log("Nama Pelanggan Transaksi 2:", transaksi[1].pelanggan);
 console.log("Nama Menu Item 2 Transaksi 3:", menu[transaksi[2].pesanan[1].indeksMenu].nama);

 console.log("Typeof tahunBerdiri:", typeof kedai.tahunBerdiri);
 console.log("Typeof sedangBuka:", typeof kedai.sedangBuka);
 console.log("Typeof website:", typeof kedai.website);
 console.log("Typeof jamOperasional:", typeof kedai.jamOperasional);
 console.log("Typeof menu:", typeof menu);
 console.log("Typeof transaksi[0].catatan:", typeof transaksi[0].catatan);

 let catatanKasir;
 console.log("Catatan Kasir:", catatanKasir);

 /*
JABAWAN PERTANYAAN BAGIAN 2 (DALAM KOMENTAR):
1. Kenapa nomorWhatsApp disimpan sebagai string, bukan number?
   Jawab: Karena nomor telepon sering diawali dengan angka 0 (nol di depan akan hilang jika disimpan sebagai tipe number) dan nomor telepon tidak digunakan untuk operasi matematika (penjumlahan/pengurangan).
2. Kenapa website diisi null, sedangkan catatanKasir dibiarkan tanpa nilai?
   Jawab: website diisi null secara sengaja (intentional absence of value) untuk menandakan bahwa properti tersebut memang ada namun belum memiliki nilai/link saat ini. Sedangkan catatanKasir dibiarkan tanpa nilai (undefined) karena dideklarasikan tanpa inisialisasi awal.
3. Jika menu berisi 6 item, apa hasil menu[6]? Kenapa?
   Jawab: Hasilnya adalah `undefined`. Karena array berbasis indeks 0, sehingga elemen ke-6 berada di indeks 5, dan indeks 6 belum ada isinya.
4. Apa hasil typeof menu? Kenapa hasilnya begitu?
   Jawab: Hasilnya adalah `"object"`. Di JavaScript, array secara internal adalah tipe data turunan dari object.
5. Kenapa menu dibuat sebagai array, sedangkan kedai dibuat sebagai object?
   Jawab: menu dibuat sebagai array karena berupa daftar/koleksi data yang sejenis (daftar item menu) yang berurutan. Sedangkan kedai dibuat sebagai object karena merepresentasikan satu entitas tunggal dengan properti/atribut berlabel (nama, pemilik, kota, dll).
*/

// --- Perhitungan Transaksi & Laporan Harian ---

let pendapatanHarian = 0;
let jumlahTransaksi = 0;

// Perhitungan Transaksi 1
let subtotal1 = (menu[transaksi[0].pesanan[0].indeksMenu].harga * transaksi[0].pesanan[0].jumlah) +
               (menu[transaksi[0].pesanan[1].indeksMenu].harga * transaksi[0].pesanan[1].jumlah);
let potongan1 = transaksi[0].sudahMember ? subtotal * 0.1 : 0;
let pajak1 = (subtotal1 - potongan1) * 0.11;
let totalBayar1 = (subtotal - potongan1) + pajak1;
let kembalian1 = transaksi[0].uangBayar - totalBayar1;
let uangCukup1 = kembalian1 >= 0; 
let totalItem1 = transaksi[0].pesanan.reduce((sum, item) => sum + item.jumlah, 0);
let gratisAntar1 = subtotal >= 100000 || totalItem1 >= 5;
let semuaMenuTersedia1 = transaksi[0].pesanan.every(p => menu[p.indeksMenu].tersedia);

// Perhitungan Transaksi 2
let subtotal2 = (menu[transaksi[1].pesanan[0].indeksMenu].harga * transaksi[1].pesanan[0].jumlah) +
                (menu[transaksi[1].pesanan[1].indeksMenu].harga * transaksi[1].pesanan[1].jumlah);
let potongan2 = transaksi[1].sudahMember ? subtotal2 * 0.1 : 0;
let pajak2 = (subtotal2 - potongan2) * 0.11;
let totalBayar2 = (subtotal2 - potongan2) + pajak2;
let kembalian2 = transaksi[1].uangBayar - totalBayar2;
let uangCukup2 = kembalian2 >= 0;
let totalItem2 = transaksi[1].pesanan.reduce((sum, item) => sum + item.jumlah, 0);
let gratisAntar2 = subtotal2 >= 100000 || totalItem2 >= 5;
let semuaMenuTersedia2 = transaksi[1].pesanan.every(p => menu[p.indeksMenu].tersedia);

//  Perhitungan Transaksi 3
let subtotal3 = (menu[transaksi[2].pesanan[0].indeksMenu].harga * transaksi[2].pesanan[0].jumlah) +
                (menu[transaksi[2].pesanan[1].indeksMenu].harga * transaksi[2].pesanan[1].jumlah) +
                (menu[transaksi[2].pesanan[2].indeksMenu].harga * transaksi[2].pesanan[2].jumlah);
let potongan3 = transaksi[2]. sudahMember ? subtotal3 * 0.1 : 0;
let pajak3 = (subtotal3 - potongan3) * 0.11;
let totalBayar3 = (subtotal3 - potongan3) + pajak3;
let kembalian3 = transaksi[2].uangBayar - totalBayar3;
let uangCukup3 = kembalian3 >= 0;
let totalItem3 = transaksi[2].pesanan.reduce((sum, item) => sum + item.jumlah, 0);
let gratisAntar3 = subtotal3 >= 10000 || totalItem3 >= 5;
let semuaMenuTersedia3 = transaksi[2].pesanan.every(p => menu[p.indeksMenu].tersedia);

// Sisa pecahan (jika kembalian tida negatif)
let sisaPecahan50k_1 = kembalian1 >= 0 ? kembalian1 % 50000 : 0;
let sisaPecahan20k_1 = kembalian1 >= 0 ? sisaPecahan50k_1 % 20000 : 0;

// Akumulasi Laporan Harian
pendapatanHarian += totalBayar1;
jumlahTransaksi++;
pendapatanHarian += totalBayar2
jumlahTransaksi++;
pendapatanHarian += totalBayar3
jumlahTransaksi++;

let rataRataPendapatan = pendapatanHarian / jumlahTransaksi;
let selisihTersebar = Math.max(totalBayar1, totalBayar2, totalBayar3) - Math.min(totalBayar1, totalBayar2, totalBayar3);
let persentaseTransaksiPertama = (totalBayar1 / pendapatanHarian) * 100;
let hargaKopiTigaBulan = menu[0].harga * (1.05 ** 3);

// Cetak Laporan
console.log(`========================================`);
console.log(`      LAPORAN HARIAN KEDAI SENJA        `);
console.log(`      Nama Kedai: ${kedai.nama}           `);
console.log(`========================================`);
console.log(`[${transaksi[0].kode}] ${transaksi[0].pelanggan} | Total: Rp${totalBayar1.toFixed(2)} | Kembalian: Rp${kembalian1.toFixed(2)}`);
console.log(`[${transaksi[1].kode}] ${transaksi[1].pelanggan} | Total: Rp${totalBayar2.toFixed(2)} | Kembalian: Rp${kembalian2.toFixed(2)}`);
console.log(`[${transaksi[2].kode}] ${transaksi[2].pelanggan} | Total: Rp${totalBayar3.toFixed(2)} | Kembalian: Rp${kembalian3.toFixed(2)}`);
console.log(`----------------------------------------`);
console.log(`Total Pendapatan Harian : Rp${pendapatanHarian.toFixed(2)}`);
console.log(`Jumlah Transaksi        : ${jumlahTransaksi}`);
console.log(`Rata-rata Pendapatan    : Rp${rataRataPendapatan.toFixed(2)}`);
console.log(`Selisih Terbesar        : Rp${selisihTerbesar.toFixed(2)}`);
console.log(`Porsi Transaksi 1       : ${persentaseTransaksiPertama.toFixed(2)}%`);
console.log(`Simulasi Harga Kopi 3 Bln: Rp${hargaKopiTigaBulan.toFixed(2)}`);
console.log(`========================================`);

/*
JAWABAN PERTANYAAN BAGIAN 3 (DALAM KOMENTAR):
1. Tulis perhitungan manual untuk satu transaksi pilihanmu dari subtotal sampai kembalian. Apakah sama dengan hasil program?
   (Contoh Transaksi 1: 2 Kopi Susu @18k = 36k, 1 Roti Bakar @15k = 15k. Subtotal = 51k. Member diskon 10% = 5.1k. Sisa = 45.9k. Pajak 11% = 5.049k. Total = 50.949k. Bayar 100k -> Kembalian 49.051k. Hasil sama persis dengan program).
2. Pilih satu transaksi. Ganti || pada gratisAntar menjadi &&. Tulis hasil sebelum dan sesudah, lalu jelaskan kenapa berbeda.
   Jawab: Operator `||` (OR) bernilai true jika salah satu syarat terpenuhi. Operator `&&` (AND) mewajibkan SEMUA syarat terpenuhi (subtotal >= 100000 DAN item >= 5). Jika diganti `&&`, transaksi yang sebelumnya dapat gratis antar karena memenuhi salah satu syarat kini menjadi false.
3. Tulis satu perhitunganmu yang hasilnya berubah jika tanda kurungnya dihapus. Berapa hasil dengan dan tanpa kurung?
   Jawab: `let pajak1 = (subtotal1 - potongan1) * 0.11;`. Tanpa kurung menjadi `subtotal1 - potongan1 * 0.11` (perkalian didahulukan), menghasilkan nilai pajak yang salah.
4. Sebutkan 3 variabelmu yang memakai const dan 3 yang memakai let. Jelaskan alasan masing-masing.
   Jawab: 
   - const: `kedai`, `menu`, `transaksi` (karena struktur referensi utama data tidak dideklarasikan ulang).
   - let: `pendapatanHarian`, `jumlahTransaksi`, `subtotal1` (karena nilainya berubah/diakumulasi selama program berjalan).
5. Kenapa hargaKopiTigaBulan tidak dihitung dengan harga * 1.05 * 3? Apa bedanya 1.05 ** 3 dengan 1.05 * 3?
   Jawab: `1.05 * 3` adalah kenaikan linier sederhana (tiga kali lipat dari 5%). Sedangkan `1.05 ** 3` menghitung bunga majemuk (compounding) kenaikan 5% per bulan selama 3 bulan berturut-turut.
6. Jika harga pada menu[0] diubah di data, apakah hasil perhitungan yang sudah tercetak ikut berubah otomatis? Buktikan dengan kode.
   Jawab: Tidak ikut berubah untuk variabel yang sudah terlanjur dieksekusi sebelumnya, karena JavaScript mengeksekusi kode secara sekuensial (top-down). Nilai variabel sudah tersimpan saat baris eksekusi tersebut dijalankan.
*/

// Perbaikan Kode Kedai Senja
//Fix: Ubah let menjadi const jika tidak diubah, atau perbaiki tipe data

const namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2; // FIX: Ubah string "2" menjadi number 2 agar tidak terjadi string concatenation
let transaksiSelesai = 0;

// Jumlah Seluruh Item. Seharusnya:5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
let subtotal = (HARGA_KOPI * jumlahKopi) + (HARGA_ROTI * jumlahRoti); // FIX: Perbaiki typo 'jumlahkopi' menjadi 'jumlahKopi'

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK; // FIX: Tambahkan tanda kurung agar pengurangan diskon didahulukan sebelum dikali tarif pajak

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak; // FIX: Tambahkan titik koma (opsional, menjaga konsistensi)

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar >= totalBayar; // FIX: Gunakan operator perbandingan >= alih-alih assignment (=)

// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar; // FIX: Urutan benar adalah uangBayar dikurangi totalBayar, bukan sebaliknya

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0; // FIX: Gunakan === 0 untuk cek genap, bukan === 1

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai += 1; // FIX: Gunakan penugasan increment (+= 1 atau ++) agar nilainya tersimpan

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// let namaKedai = "Kedai Senja Baru"; // FIX: Hapus deklarasi ulang 'let' karena namaKedai sudah dideklarasikan sebagai const di atas, gunakan re-assignment jika let atau biarkan const jika diubah jadi let. Di sini kita ubah deklarasi atas menjadi let:
// (Catatan: Agar bisa diubah, baris pertama kita ubah jadi let namaKedai = "Kedai Senja";)

// Lanjutan perbaikan:
// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// TARIF_PAJAK = 0.12; // FIX: Hapus baris ini karena const tidak boleh diubah nilainya.

console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);

/*
CATATAN BUG:
1. `let jumlahRoti = "2";`: Tidak error (Type coercion), hasil penjumlahan jadi "32". (Jenis: Tidak error tapi hasil salah).
2. `jumlahkopi`: Error `ReferenceError` karena huruf 'K' besar-kecil sensitif. (Jenis: Menghentikan program dengan error).
3. `subtotal - 10000 * TARIF_PAJAK`: Tidak error, operator precedence membuat perkalian didahulukan. (Jenis: Tidak error tapi hasil salah).
4. `uangBayar = totalBayar`: Tidak error, melakukan assignment nilai bukan perbandingan boolean. (Jenis: Tidak error tapi hasil salah).
5. `totalBayar - uangBayar`: Tidak error, hasil menjadi minus. (Jenis: Tidak error tapi hasil salah).
6. `TARIF_PAJAK = 0.12`: Error `TypeError` karena mencoba mengubah nilai variabel const. (Jenis: Menghentikan program dengan error).
*/

/* ==========================================================
 * Eksperimen JavaScript Kedai Senja
 * ========================================================== */

// 5.1 TEBAK
console.log(5 + "5");      // Tebak: "55" | Asli: "55"
console.log("10" - 4);     // Tebak: 6   | Asli: 6
console.log("10" * "2");   // Tebak: 20  | Asli: 20
console.log(typeof ("5" + 5)); // Tebak: "string" | Asli: "string"
console.log(9 % 4);        // Tebak: 1   | Asli: 1
console.log((2 + 3) ** 2); // Tebak: 25  | Asli: 25
console.log(10 / 4);       // Tebak: 2.5 | Asli: 2.5
console.log(1 / 0);        // Tebak: Infinity | Asli: Infinity
console.log("abc" * 2);    // Tebak: NaN | Asli: NaN
console.log(typeof NaN);   // Tebak: "number" | Asli: "number"
console.log((5 > 3 && 2 > 4) || 1 === 1); // Tebak: true | Asli: true
console.log(!true || !false); // Tebak: true | Asli: true
console.log("5" == 5 && "5" !== 5); // Tebak: false | Asli: false
console.log(typeof [] === typeof {}); // Tebak: true | Asli: true
console.log([10, 20, 30][1] + [10, 20, 30][2]); // Tebak: 50 | Asli: 50


// 5.2 EKSPERIMEN VAR DAN LET
{
    var testVar = "Bocor";
    let testLet = "Terkunci";
}
console.log(testVar); // Berhasil tercetak: "Bocor"
// console.log(testLet); // Error: ReferenceError: testLet is not defined

var gantiVar = 1;
var gantiVar = 2; // Berhasil dideklarasikan ulang

let gantiLet = 1;
// let gantiLet = 2; // Error: SyntaxError: Identifier 'gantiLet' has already been declared


/*
5.3 JELASKAN (DALAM KOMENTAR):
1. Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?
   Jawab: Tanda `+` memicu string concatenation (penggabungan string) karena salah satu operand adalah string. Sedangkan operator `-` hanya ada pada operasi aritmatika, sehingga JavaScript secara otomatis mengubah string "10" menjadi number (type coercion).
2. typeof NaN hasilnya "number". Apa artinya NaN, dan kenapa tipenya number?
   Jawab: NaN singkatan dari "Not-a-Number". Tipenya adalah "number" secara spesifik dalam spesifikasi IEEE 754 floating-point untuk merepresentasikan hasil numerik yang tidak valid atau tak terdefinisi.
3. Jelaskan urutan evaluasi 5 > 3 && 2 > 4 || 1 === 1 langkah demi langkah.
   Jawab: 
   - Evaluasi perbandingan: `(5 > 3)` -> true, `(2 > 4)` -> false, `(1 === 1)` -> true.
   - Ekspresi menjadi: `true && false || true`.
   - Operator `&&` diprioritaskan: `(true && false)` -> false.
   - Ekspresi menjadi: `false || true`.
   - Hasil akhir: `true`.
4. typeof [] hasilnya "object". Bagaimana kamu membedakan array dari object biasa di kodemu?
   Jawab: Menggunakan method built-in `Array.isArray(variable)` alih-alih `typeof`.
5. Dari kode let hasil = 5 + 10; lalu console.log(hasil * 2);: sebutkan semua statement dan expression, dan nilai tiap expression.
   Jawab:
   - Statement 1: `let hasil = 5 + 10;`
   - Statement 2: `console.log(hasil * 2);`
   - Expression & Nilai: `5 + 10` (15), `5` (5), `10` (10), `hasil` (15), `hasil * 2` (30), `console.log(...)` (undefined).
6. eksperimen.js dijalankan di mana dan oleh apa? Apa bedanya dengan menjalankan JavaScript lewat Node.js? Kenapa modul ini memakai let dan const, bukan var?
   Jawab: Dijalankan di browser (client-side) oleh mesin JavaScript browser (V8/SpiderMonkey). Bedanya dengan Node.js adalah browser memiliki objek global `window` dan DOM API, sedangkan Node.js berjalan di sisi server. Penggunaan `let` dan `const` dianjurkan untuk mencegah masalah *variable hoisting* dan kebocoran scope (`block scope`).
7. Apa hasil eksperimen var dan let milikmu? Jelaskan apa yang terjadi di setiap kasus.
   Jawab: Variabel `var` mengabaikan batasan blok `{}` (function-scoped/global-scoped) sehingga bisa diakses di luar blok dan dideklarasikan ulang tanpa error. `let` mematuhi block scope (error jika diakses di luar) dan melarang deklarasi ulang di scope yang sama.
8. Berikan satu contoh nyata di program besar yang bisa menimbulkan bug karena var bocor keluar blok atau dideklarasikan ulang.
   Jawab: Penggunaan variabel penghitung `var i` di dalam perulangan bersarang (`for loop`) yang tidak sengaja menimpa nilai variabel `i` di blok luar, menyebabkan infinite loop atau nilai data tertimpa secara tidak terduga.
*/



 
 
 
 
 
 
 
 
 
 
 
 
 
 


