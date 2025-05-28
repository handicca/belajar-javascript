### Primitives (Tipe Data Primitif)

#### Karakteristik
1. **Immutable**:
   Tipe data primitif tidak dapat diubah setelah didefinisikan. Operasi apa pun pada tipe data primitif akan menghasilkan nilai baru, bukan mengubah nilai yang ada.
   
2. **Stored by Value (Disimpan berdasarkan Nilai)**:
   Primitives disimpan langsung sebagai nilai. Ketika Anda menetapkan satu variabel primitif ke variabel lain, nilai tersebut disalin.

#### Jenis Tipe Data Primitif
1. **Number**: 
    Digunakan untuk semua jenis angka, baik integer maupun floating-point.
    ```javascript
    let num = 42;
    let pi = 3.14;
    ```

2. **String**:
    Digunakan untuk urutan karakter.
    ```javascript
    let str = "Hello, World!";
    ```

3. **Boolean**:
    Mewakili nilai benar (`true`) atau salah (`false`).
    ```javascript
    let isTrue = true;
    let isFalse = false;
    ```

4. **Undefined**:
    Variabel yang telah dideklarasikan tetapi belum diinisialisasi memiliki nilai `undefined`.
    ```javascript
    let undefinedVar;
    console.log(undefinedVar); // Output: undefined
    ```

5. **Null**:
    Mewakili nilai yang secara eksplisit tidak memiliki nilai.
    ```javascript
    let nullVar = null;
    ```

6. **Symbol**:
    Mewakili nilai unik dan immutable, biasanya digunakan sebagai identifier untuk properti objek.
    ```javascript
    let sym = Symbol('unique');
    ```

7. **BigInt**:
    Digunakan untuk merepresentasikan bilangan bulat yang sangat besar yang tidak dapat direpresentasikan oleh tipe `Number`.
    ```javascript
    let bigInt = BigInt(9007199254740991);
    ```

### Objects (Tipe Data Referensi)

#### Karakteristik
1. **Mutable**:
   Objek dapat diubah setelah didefinisikan. Anda dapat menambahkan, mengubah, atau menghapus properti objek setelah objek tersebut dibuat.
   
2. **Stored by Reference (Disimpan berdasarkan Referensi)**:
   Objek disimpan sebagai referensi ke lokasi memori. Ketika Anda menetapkan satu variabel objek ke variabel lain, referensi ke lokasi memori yang sama disalin, bukan nilai objek itu sendiri.

#### Jenis Tipe Data Objek
1. **Object**:
    Struktur data dasar yang menyimpan data dalam bentuk pasangan kunci-nilai.
    ```javascript
    let obj = { name: "Alice", age: 25 };
    ```

2. **Array**:
    Struktur data yang menyimpan daftar nilai.
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    ```

3. **Function**:
    Blok kode yang dapat dieksekusi dan dapat dipanggil di tempat lain.
    ```javascript
    function greet() {
        console.log("Hello!");
    }
    ```

4. **Date**:
    Objek yang mewakili tanggal dan waktu.
    ```javascript
    let now = new Date();
    ```

### Perbedaan Utama antara Primitives dan Objects

1. **Mutability (Kemampuan Diubah)**:
    - **Primitives**: Tidak dapat diubah setelah didefinisikan.
        ```javascript
        let str = "hello";
        str[0] = "H"; // Tidak mengubah string
        console.log(str); // Output: "hello"
        ```
    - **Objects**: Dapat diubah setelah didefinisikan.
        ```javascript
        let obj = { name: "Alice" };
        obj.name = "Bob"; // Mengubah nilai properti
        console.log(obj.name); // Output: "Bob"
        ```

2. **Assignment (Penugasan)**:
    - **Primitives**: Menyalin nilai sebenarnya.
        ```javascript
        let x = 10;
        let y = x;
        y = 20;
        console.log(x); // Output: 10
        console.log(y); // Output: 20
        ```
    - **Objects**: Menyalin referensi ke objek.
        ```javascript
        let obj1 = { name: "Alice" };
        let obj2 = obj1;
        obj2.name = "Bob";
        console.log(obj1.name); // Output: "Bob"
        console.log(obj2.name); // Output: "Bob"
        ```

3. **Comparison (Perbandingan)**:
    - **Primitives**: Dibandingkan berdasarkan nilai mereka.
        ```javascript
        let a = 10;
        let b = 10;
        console.log(a === b); // Output: true
        ```
    - **Objects**: Dibandingkan berdasarkan referensi mereka.
        ```javascript
        let obj1 = { name: "Alice" };
        let obj2 = { name: "Alice" };
        console.log(obj1 === obj2); // Output: false
        ```

### Contoh Praktis

#### Contoh pada Primitives
```javascript
let a = 5;
let b = a; // 'b' menyalin nilai 'a'
b = 10; // Mengubah nilai 'b' tidak mempengaruhi 'a'
console.log(a); // Output: 5
console.log(b); // Output: 10
```

#### Contoh pada Objects
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // 'obj2' menyalin referensi ke 'obj1'
obj2.name = "Bob"; // Mengubah nilai 'name' pada 'obj2' juga mempengaruhi 'obj1'
console.log(obj1.name); // Output: "Bob"
console.log(obj2.name); // Output: "Bob"
```

### Kesimpulan

- **Primitives** adalah tipe data dasar yang immutable dan disimpan langsung sebagai nilai.
- **Objects** adalah tipe data yang lebih kompleks yang mutable dan disimpan sebagai referensi.
- Operasi penugasan dan perbandingan bekerja secara berbeda antara primitives dan objects karena perbedaan dalam cara mereka disimpan dan diakses dalam memori.
