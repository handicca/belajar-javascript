**Closures** adalah kombinasi dari sebuah fungsi yang dikemas bersama dengan referensi ke lingkungan sekitarnya (Lexical Scope). Dengan kata lain, **closure** memberikan akses ke lingkup fungsi luar dari dalam fungsi dalamnya. Dalam JavaScript, **closures** terbentuk setiap kali fungsi dibuat, pada saat pembuatan fungsi.

Mari kita lihat contoh sederhana:

```javascript
function init() {
    var name = "Mozilla"; // name adalah variabel lokal yang dibuat oleh fungsi init
    function displayName() {
        // displayName() adalah fungsi dalam, yang membentuk closure
        console.log(name); // menggunakan variabel yang dideklarasikan dalam fungsi induk
    }
    displayName();
}
init(); // Output: "Mozilla"
```

Pada contoh di atas, fungsi `init()` membuat variabel lokal bernama `name` dan fungsi `displayName()`. Fungsi `displayName()` adalah fungsi dalam yang hanya dapat diakses dalam tubuh fungsi `init()`. Meskipun demikian, karena fungsi dalam memiliki akses ke variabel dari fungsi luar, `displayName()` dapat mengakses variabel `name` yang dideklarasikan dalam fungsi induk. Ini adalah contoh dari **lexical scoping**, yang menentukan bagaimana parser menyelesaikan nama variabel ketika fungsi bersarang. Kata "lexical" mengacu pada fakta bahwa scoping leksikal menggunakan lokasi di mana variabel dideklarasikan dalam kode sumber untuk menentukan di mana variabel tersebut tersedia. Fungsi bersarang memiliki akses ke variabel yang dideklarasikan dalam lingkup luar. Dalam contoh ini, lingkup disebut sebagai lingkup fungsi, karena variabel hanya dapat diakses dalam tubuh fungsi tempat variabel tersebut dideklarasikan.

Sebagai catatan, dalam ES6, JavaScript memperkenalkan deklarasi `let` dan `const`, yang memungkinkan pembuatan variabel berlingkup blok. Ini membantu menghindari pencemaran lingkup global dan memperbaiki masalah yang terkait dengan **closures**.