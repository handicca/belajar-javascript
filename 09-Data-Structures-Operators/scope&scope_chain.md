### Scope (Lingkup)
Scope dalam JavaScript mengacu pada jangkauan di mana sebuah variabel dapat diakses atau direferensikan. Ada dua jenis scope utama dalam JavaScript:

1. **Global Scope (Lingkup Global)**: Variabel yang dideklarasikan di luar fungsi atau blok kode mana pun berada dalam lingkup global dan dapat diakses dari mana saja di dalam kode.
    ```javascript
    var globalVar = "I am global";

    function testFunction() {
        console.log(globalVar); // Dapat mengakses globalVar
    }

    testFunction(); // Output: I am global
    console.log(globalVar); // Output: I am global
    ```

2. **Local Scope (Lingkup Lokal)**: Variabel yang dideklarasikan di dalam fungsi atau blok kode hanya dapat diakses dari dalam fungsi atau blok tersebut.
    - **Function Scope (Lingkup Fungsi)**: Variabel yang dideklarasikan dengan `var` di dalam fungsi memiliki lingkup fungsi.
    - **Block Scope (Lingkup Blok)**: Variabel yang dideklarasikan dengan `let` atau `const` di dalam blok kode (`{}`) memiliki lingkup blok.

    ```javascript
    function testFunction() {
        var functionScopedVar = "I am local to function";

        if (true) {
            let blockScopedVar = "I am local to block";
            const anotherBlockScopedVar = "I am also local to block";
            console.log(blockScopedVar); // Output: I am local to block
            console.log(anotherBlockScopedVar); // Output: I am also local to block
        }

        console.log(functionScopedVar); // Output: I am local to function
        // console.log(blockScopedVar); // Error: blockScopedVar is not defined
        // console.log(anotherBlockScopedVar); // Error: anotherBlockScopedVar is not defined
    }

    testFunction();
    // console.log(functionScopedVar); // Error: functionScopedVar is not defined
    ```

### Scope Chain (Rantai Lingkup)
Scope chain mengacu pada mekanisme di mana JavaScript mengatur variabel di dalam lingkup yang bersarang (nested scopes). Ketika JavaScript mencoba untuk mengakses sebuah variabel, ia akan mencarinya dalam urutan sebagai berikut:

1. **Current Scope (Lingkup Saat Ini)**: Lingkup di mana kode tersebut dieksekusi.
2. **Outer Scope (Lingkup Luar)**: Jika variabel tidak ditemukan dalam lingkup saat ini, JavaScript akan melanjutkan pencarian ke lingkup di luar lingkup saat ini.
3. **Global Scope (Lingkup Global)**: Jika variabel tidak ditemukan dalam lingkup luar, pencarian akan dilanjutkan hingga lingkup global.

Contoh:
```javascript
var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am outer";

    function innerFunction() {
        var innerVar = "I am inner";

        console.log(innerVar); // Output: I am inner
        console.log(outerVar); // Output: I am outer
        console.log(globalVar); // Output: I am global
    }

    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
```
Dalam contoh di atas, ketika `innerFunction` dieksekusi:
- Ia akan menemukan `innerVar` di lingkup lokalnya.
- Jika `outerVar` dicari, ia akan menemukannya di lingkup luar (fungsi `outerFunction`).
- Jika `globalVar` dicari, ia akan menemukannya di lingkup global.
