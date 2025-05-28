Tentu! Mari kita bahas tentang **Execution Context** dan **The Call Stack** dalam JavaScript.

1. **Execution Context**:
   - **Apa itu Execution Context?** Ketika kita menulis kode JavaScript, browser tidak langsung memahami kode tingkat tinggi yang kita tulis dalam aplikasi kita. Kode tersebut perlu diubah menjadi format yang bisa dimengerti oleh browser dan komputer kita, yaitu kode mesin (machine code).
   - **Bagaimana Execution Context Bekerja?** Ketika browser menemukan kode JavaScript yang akan dijalankan melalui tag `<script>` atau atribut yang berisi kode JavaScript seperti `onClick`, browser mengirimnya ke mesin JavaScript-nya. Mesin JavaScript browser kemudian membuat lingkungan khusus untuk menangani transformasi dan eksekusi kode JavaScript ini. Lingkungan ini dikenal sebagai **Execution Context**.
   - **Apa yang Ada dalam Execution Context?** Execution Context berisi kode yang sedang berjalan dan segala sesuatu yang membantu dalam eksekusinya. Selama runtime Execution Context, kode spesifik diuraikan oleh parser, variabel dan fungsi disimpan di memori, bytecode yang dapat dieksekusi dihasilkan, dan kode dieksekusi.
   - **Jenis Execution Context di JavaScript:**
     - **Global Execution Context (GEC):** Ini adalah Execution Context default yang dibuat ketika mesin JavaScript menerima file skrip. GEC adalah tempat di mana semua kode JavaScript yang tidak berada di dalam fungsi dieksekusi¹.
     - **Function Execution Context (FEC):** Setiap kali fungsi dipanggil, sebuah Execution Context fungsi baru dibuat dan ditambahkan ke dalam **Call Stack** (selanjutnya akan kita bahas).

2. **The Call Stack**:
   - The Call Stack adalah mekanisme yang mengatur urutan eksekusi fungsi. Setiap kali fungsi dipanggil, Execution Context fungsi baru dibuat dan ditambahkan ke dalam Call Stack. Ketika fungsi selesai, Execution Context tersebut dihapus dari stack, dan kontrol kembali ke konteks sebelumnya².
   - Call Stack menggunakan prinsip LIFO (Last-In-First-Out), artinya konteks yang terakhir dimasukkan ke dalam stack akan dieksekusi terlebih dahulu⁴.
