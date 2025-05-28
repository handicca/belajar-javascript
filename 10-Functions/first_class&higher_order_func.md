
1. **First-Class Functions**:
   - Fungsi disebut "first-class" jika dalam bahasa pemrograman, fungsi diperlakukan seperti variabel lain.
   - Artinya, fungsi dapat di-assign ke variabel lain, dilewatkan sebagai argumen, atau bahkan dikembalikan oleh fungsi lain.
   - Dalam JavaScript, fungsi dianggap sebagai warga negara "first-class".
   - Contoh:
     ```javascript
     const greet = (name) => {
         console.log(`Halo, ${name}!`);
     };

     const sayHello = greet;
     sayHello("Andi"); // Output: "Halo, Andi!"
     ```

2. **Higher-Order Functions**:
   - Fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi baru disebut "higher-order function" (HOF).
   - HOF hanya mungkin ada karena adanya konsep "first-class functions".
   - Contoh:
     ```javascript
     // HOF yang menerima callback function
     function performOperation(operation, a, b) {
         return operation(a, b);
     }

     const add = (x, y) => x + y;
     const subtract = (x, y) => x - y;

     console.log(performOperation(add, 10, 5)); // Output: 15
     console.log(performOperation(subtract, 10, 5)); // Output: 5

     // HOF yang mengembalikan fungsi baru
     function createGreeter(greeting) {
         return function (name) {
             console.log(`${greeting}, ${name}!`);
         };
     }

     const greetHello = createGreeter("Hello");
     greetHello("John"); // Output: "Hello, John!"
     ```

Jadi, **first-class functions** memperlakukan fungsi seperti variabel, sedangkan **higher-order functions** menerima atau mengembalikan fungsi. Keduanya memungkinkan kita untuk menulis kode yang lebih fleksibel dan reusable.