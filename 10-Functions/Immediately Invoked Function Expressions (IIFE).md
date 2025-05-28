**Immediately Invoked Function Expressions (IIFE)** adalah fungsi JavaScript yang dieksekusi segera setelah didefinisikan. Biasanya, IIFE digunakan untuk menciptakan lingkup lokal untuk variabel agar tidak mencemari lingkup global. Berikut adalah beberapa contoh penggunaan IIFE:

1. **Contoh Dasar IIFE**:
   ```javascript
   (function() {
       // Blok kode IIFE
       let localVar = 'Ini adalah variabel lokal';
       console.log(localVar); // Output: Ini adalah variabel lokal
   })();
   ```
   Pada contoh di atas, fungsi dibungkus dalam tanda kurung `(function () { ... })`, diikuti oleh `()` untuk segera menjalankannya.

2. **Contoh IIFE dengan Hasil**:
   ```javascript
   let result = (function() {
       let x = 10;
       let y = 20;
       return x + y;
   })();
   console.log(result); // Output: 30
   ```
   IIFE di atas segera dieksekusi dan mengembalikan hasil penjumlahan `x` dan `y`. Nilai hasil IIFE (yaitu 30) diberikan ke variabel `result`.

3. **Contoh IIFE untuk Membuat Variabel Privat**:
   ```javascript
   let counter = (function() {
       let count = 0;
       return {
           increment() {
               count++;
           },
           decrement() {
               count--;
           },
           getCount() {
               return count;
           }
       };
   })();

   // Menambahkan nilai counter
   counter.increment();
   counter.increment();
   counter.increment();
   console.log(counter.getCount()); // Output: 3

   // Mencoba mengakses variabel count secara langsung
   console.log(counter.count); // Output: undefined (tidak dapat mengakses variabel privat)
   ```
   Di sini, `count` adalah variabel privat yang hanya dapat diakses dari dalam IIFE. Objek yang dikembalikan mengungkapkan metode (increment, decrement, dan getCount) yang memungkinkan manipulasi dan akses terkontrol ke variabel `count`.

Beberapa penggunaan IIFE meliputi menghindari pencemaran namespace global, menciptakan closure, dan mengelola variabel dan metode privat.