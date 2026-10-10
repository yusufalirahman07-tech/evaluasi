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
5.3 JELASKAN:
1. Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?
   Jawab: Tanda `+` memicu string concatenation (penggabungan string) karena salah satu operand adalah string. Sedangkan operator `-` memaksa JavaScript melakukan type coercion menjadi operasi aritmatika numerik.
2. typeof NaN hasilnya "number". Apa artinya NaN, dan kenapa tipenya number?
   Jawab: NaN artinya "Not-a-Number", namun secara spesifikasi standar angka IEEE 754, tipenya tetap dikategorikan sebagai "number" untuk merepresentasikan hasil dari operasi matematika yang invalid.
3. Jelaskan urutan evaluasi 5 > 3 && 2 > 4 || 1 === 1 langkah demi langkah.
   Jawab: Evaluasi perbandingan (`5>3` true, `2>4` false, `1===1` true) -> `true && false || true`. Prioritas operator `&&` dijalankan dulu (`true && false` menjadi false) -> `false || true` -> Hasil akhir `true`.
4. typeof [] hasilnya "object". Bagaimana kamu membedakan array dari object biasa di kodemu?
   Jawab: Menggunakan method `Array.isArray(variabel)` alih-alih operator `typeof`.
5. Dari kode let hasil = 5 + 10; lalu console.log(hasil * 2);: sebutkan semua statement dan expression, dan nilai tiap expression.
   Jawab: 
   - Statement 1: `let hasil = 5 + 10;`, Statement 2: `console.log(hasil * 2);`
   - Expression & nilai: `5 + 10` (15), `5` (5), `10` (10), `hasil` (15), `hasil * 2` (30).
6. eksperimen.js dijalankan di mana dan oleh apa? Apa bedanya dengan menjalankan JavaScript lewat Node.js? Kenapa modul ini memakai let dan const, bukan var?
   Jawab: Dijalankan di browser oleh mesin JS browser (V8/SpiderMonkey). Node.js berjalan di environment server (tanpa DOM). Penggunaan `let` dan `const` mencegah masalah scope dan hoisting yang rentan terjadi pada `var`.
7. Apa hasil eksperimen var dan let milikmu? Jelaskan apa yang terjadi di setiap kasus.
   Jawab: Variabel `var` mengabaikan block scope (bocor ke luar blok `{}`) dan bisa dideklarasikan ulang. `let` mematuhi block scope dan melarang redeklarasi.
8. Berikan satu contoh nyata di program besar yang bisa menimbulkan bug karena var bocor keluar blok atau dideklarasikan ulang.
   Jawab: Variabel penghitung loop `var i` di dalam perulangan bersarang yang tidak sengaja menimpa nilai `i` di luar loop, memicu data tertimpa atau infinite loop.
*/