
1. **Pass by Value**:
   - Ketika Anda memanggil sebuah fungsi, nilai dari variabel langsung dilewatkan sebagai argumen.
   - Modifikasi yang dilakukan di dalam fungsi tidak memengaruhi nilai asli.
   - Parameter yang dilewatkan sebagai argumen menghasilkan salinan sendiri.
   - Contoh:
     ```javascript
     function Passbyvalue(a, b) {
         let tmp = b;
         b = a;
         a = tmp;
         console.log(`Dalam fungsi Pass by value -> a = ${a}  b = ${b}`);
     }
     let a = 1;
     let b = 2;
     console.log(`Sebelum memanggil fungsi Pass by value -> a = ${a}  b = ${b}`);
     Passbyvalue(a, b);
     console.log(`Setelah memanggil fungsi Pass by value -> a = ${a}  b = ${b}`);
     ```
     Output:
     ```
     Sebelum memanggil fungsi Pass by value -> a = 1 b = 2
     Dalam fungsi Pass by value -> a = 2 b = 1
     Setelah memanggil fungsi Pass by value -> a = 1 b = 2
     ```

2. **Pass by Reference**:
   - Ketika menggunakan "pass by reference", fungsi dipanggil dengan langsung melewati referensi/alamat variabel sebagai argumen.
   - Perubahan nilai di dalam fungsi juga memengaruhi nilai asli.
   - Array dan objek di JavaScript mengikuti sifat "pass by reference".
   - Contoh:
     ```javascript
     function PassbyReference(obj) {
         let tmp = obj.a;
         obj.a = obj.b;
         obj.b = tmp;
         console.log(`Dalam fungsi Pass By Reference -> a = ${obj.a}  b = ${obj.b}`);
     }
     let obj = { a: 10, b: 20 };
     console.log(`Sebelum memanggil fungsi Pass By Reference -> a = ${obj.a}  b = ${obj.b}`);
     PassbyReference(obj);
     console.log(`Setelah memanggil fungsi Pass By Reference -> a = ${obj.a}  b = ${obj.b}`);
     ```
     Output:
     ```
     Sebelum memanggil fungsi Pass By Reference -> a = 10 b = 20
     Dalam fungsi Pass By Reference -> a = 20 b = 10
     Setelah memanggil fungsi Pass By Reference -> a = 20 b = 10
     ```

Ingat bahwa dalam "pass by reference", kita mengubah nilai asli. Jika kita memutakhirkan referensi objek dalam konteks fungsi, itu tidak akan memengaruhi nilai objek. Namun, jika kita mengubah objek secara internal, itu akan memengaruhi objek tersebut ¹².