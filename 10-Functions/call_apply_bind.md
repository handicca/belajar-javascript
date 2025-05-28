Berikut ini adalah penjelasan tentang method `call()`, `apply()`, dan `bind()` dalam JavaScript:

### 1. `call()`
`call()` adalah method yang memungkinkan kita untuk memanggil fungsi dengan menetapkan `this` dan memberikan argumen secara individual.

**Sintaks:**
```javascript
functionName.call(thisArg, arg1, arg2, ...)
```

**Contoh:**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!');
```
Dalam contoh di atas, method `call()` memanggil fungsi `greet` dengan `this` yang diset ke objek `person`, dan argumen `greeting` dan `punctuation` diset ke 'Hello' dan '!', masing-masing. Output dari contoh ini adalah:
```
Hello, Alice!
```

### 2. `apply()`
`apply()` mirip dengan `call()`, tetapi argumen fungsi diberikan dalam bentuk array atau array-like object.

**Sintaks:**
```javascript
functionName.apply(thisArg, [arg1, arg2, ...])
```

**Contoh:**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.apply(person, ['Hello', '!']);
```
Dalam contoh di atas, method `apply()` memanggil fungsi `greet` dengan `this` yang diset ke objek `person`, dan argumen diberikan dalam bentuk array. Output dari contoh ini adalah:
```
Hello, Alice!
```

### 3. `bind()`
`bind()` membuat fungsi baru yang, ketika dipanggil, memiliki `this` yang diset ke nilai yang diberikan, dengan urutan argumen tertentu.

**Sintaks:**
```javascript
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)
```

**Contoh:**
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: 'Alice' };

const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // Output: Hello, Alice!
```
Dalam contoh di atas, method `bind()` membuat fungsi baru `boundGreet` yang memiliki `this` yang diset ke objek `person` dan `greeting` yang diset ke 'Hello'. Ketika `boundGreet` dipanggil dengan argumen '!', outputnya adalah:
```
Hello, Alice!
```

### Perbedaan Utama:
- `call()` dan `apply()` langsung memanggil fungsi dengan `this` yang diset dan argumen yang diberikan.
- `apply()` menggunakan array atau array-like object untuk argumen, sedangkan `call()` menggunakan argumen individual.
- `bind()` mengembalikan fungsi baru dengan `this` yang diset dan argumen tetap, dan tidak langsung memanggil fungsi tersebut.