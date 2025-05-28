### Variable Environment
Variable Environment adalah bagian dari Execution Context yang berisi semua variabel dan fungsi yang dideklarasikan di dalam lingkup tertentu. Execution Context dapat dianggap sebagai tempat di mana kode JavaScript dieksekusi, dan setiap Execution Context memiliki Variable Environment-nya sendiri.

### Hoisting
Hoisting adalah mekanisme di mana deklarasi variabel dan fungsi diangkat (hoisted) ke bagian atas lingkup sebelum kode dieksekusi. Ini berarti bahwa variabel dan fungsi dapat digunakan sebelum mereka dideklarasikan dalam kode.

#### Contoh Hoisting pada Variabel:
1. **Dengan `var`**:
    ```javascript
    console.log(hoistedVar); // Output: undefined
    var hoistedVar = "I am hoisted";
    console.log(hoistedVar); // Output: I am hoisted
    ```
    Pada contoh di atas, deklarasi `var hoistedVar;` diangkat ke atas, tetapi inisialisasinya tetap di tempat aslinya. Itulah sebabnya nilai `hoistedVar` adalah `undefined` pada baris pertama.

2. **Dengan `let` dan `const`**:
    ```javascript
    console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
    let hoistedLet = "I am hoisted";

    console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
    const hoistedConst = "I am hoisted";
    ```
    Pada contoh ini, meskipun deklarasi `let` dan `const` juga dihoist, mereka tidak dapat diakses sebelum inisialisasi, yang mengarah ke ReferenceError.

#### Contoh Hoisting pada Fungsi:
```javascript
hoistedFunction(); // Output: I am hoisted

function hoistedFunction() {
    console.log("I am hoisted");
}
```
Pada contoh di atas, seluruh deklarasi fungsi `hoistedFunction` diangkat ke atas, sehingga fungsi dapat dipanggil sebelum deklarasinya dalam kode.

### Temporal Dead Zone (TDZ)
Temporal Dead Zone adalah periode waktu selama eksekusi kode di mana variabel dideklarasikan dengan `let` atau `const` tetapi belum diinisialisasi. Selama periode ini, jika variabel diakses, JavaScript akan melempar ReferenceError.

#### Contoh TDZ:
```javascript
console.log(temporalLet); // ReferenceError: Cannot access 'temporalLet' before initialization
let temporalLet = "I am in TDZ";

console.log(temporalConst); // ReferenceError: Cannot access 'temporalConst' before initialization
const temporalConst = "I am in TDZ";

function checkTDZ() {
    console.log(innerLet); // ReferenceError: Cannot access 'innerLet' before initialization
    let innerLet = "I am in TDZ";
}
checkTDZ();
```
Pada contoh di atas, `temporalLet` dan `temporalConst` berada dalam TDZ antara awal lingkup mereka dan saat mereka diinisialisasi. Selama periode ini, mengakses variabel tersebut akan menghasilkan ReferenceError.

### Hubungan antara Hoisting dan TDZ
- **`var`**: Deklarasi dihoist ke atas lingkup dan diinisialisasi dengan `undefined`.
- **`let` dan `const`**: Deklarasi dihoist ke atas lingkup tetapi tetap berada dalam TDZ sampai eksekusi mencapai inisialisasi mereka.

### Ringkasan:
- **Variable Environment**: Bagian dari Execution Context yang menyimpan semua variabel dan fungsi yang dideklarasikan di dalam lingkup tertentu.
- **Hoisting**: Mekanisme di mana deklarasi variabel dan fungsi diangkat ke bagian atas lingkup sebelum kode dieksekusi.
- **TDZ (Temporal Dead Zone)**: Periode waktu selama eksekusi kode di mana variabel yang dideklarasikan dengan `let` atau `const` ada tetapi belum diinisialisasi, sehingga tidak dapat diakses tanpa menyebabkan ReferenceError.
