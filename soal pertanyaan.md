1. Jelaskan apa yang anda ketahui tentang Activity
ANSWER:
Activity adalah jembatan antara user untuk dapat berinteraksi dengan user interface melalui code atau program yang telah ditentukan. 

2. Jelaskan apa yang anda ketahui tentang Fragment
ANSWER:
fragment adalah sebuah bagian dari tampilan (user inteface) yang membungkus sebuah operasi tertentu.

3. Sebuah Activity memiliki tahapan siklus hidup, di antaranya : onCreate(), onStart(),
onStop(), dan onDestroy(). Jelaskan dengan singkat kapan masing-masing tahap siklus
hidup diatas dipanggil.
ANSWER:
A.onCreate(), dipanggkil ketika suatu fragment baru terinisialisasi. 
B.onStart(), dipanggil oleh sistem ketika suatu fragment dapat dilihat oleh user
C.onStop(), dipanggil ketika proses penampilan fragment pada user berhenti
D.onDestroy(), dipanggil ketika suatu fragment selesai digunakan (lifecycle's ended) 

4. Jelaskan bagaimana cara untuk menyimpan data seperti access token di Android
ANSWER:
untuk dapat menyimpan data seperti access token pada android, kita dapat menggunakan AsyncStorage

5. Jelaskan dengan singkat kapan terjadinya Application Not Responding (ANR) dan
bagaimana kita dapat mencegah terjadi ANR
ANSWER:
ANR terjadi ketika suatu operasi telah berjalan terlalu lama dan tidak ada suatu task yang menghandle operasi tersebut.
ANR dapat dicegah dengan membagi suatu operasi yang besar kepada thread lain diluar main thread.

6. Jelaskan yang dimaksud dengan proses asynchronous?
ANSWER:
asynchronous adalah sebuah proses dimana suatu code atau task berjalan secara bersamaan dengan code atau task lainnya, dikarenakan adanya waktu untuk menyelesaikan code atau task tertentu

7. Mengapa kita tidak boleh melakukan proses yang panjang di main thread?
ANSWER:
karena apabila task di main thread terlalu banyak, dapat menimbulkan ANR

8. Jelaskan apa yang anda ketahui tentang komponen Service pada Android, dan
bagaimana caranya agar service tetap berjalan walaupun aplikasi sudah dipindahkan ke
background
Answer:
komponen service pada android digunakan untuk menjalankan operasi suatu aplikasi pada background, seperti memutar musik, dan download/upload.
untuk dapat berjalan pada background, dapat menggunakan komponen android service

9. Sebutkan komponen / library yang dapat digunakan untuk melakukan proses
asynchronous
ANSWER:
komponen /library yang dapat digunakan untuk melakukan proses asynchronous adalah async await dan promise.
biasanya kedua hal tersebut digunakan ketika mengambil data dari api luar, dapat menggunakan axios dan fetch.

10. Jelaskan apa yang anda ketahui tentang dynamic link
ANSWER:
dynamic link adalah suatu address/URL yang menghubungkan user dari program satu kepada suatu program lainnya. 

11. Jelaskan bagaimana caranya agar aplikasi dapat menjalankan proses secara periodik
Answer:
salah satunya yaitu menggunakan scheduledThreadPoolExecutor

12. Jelaskan design pattern yang anda ketahui!
ANSWER:
design pattern yang saya ketahui dan biasa saya gunakan adalah MVC(Model, View, Controller). design ini mengedepankan architecture program menjadi 3 elemen, yaitu:
A. View, yang berkaitan langsung dengan user interface. 
B. Model, yang menyediakan data yang dibutuhkan oleh user melalui View.
C. Controller, yang menjadi jembatan atau pengatur bagaimana data dikirim dan diproses antara View ke Model dan sebaliknya


13. Jelaskan bagaimana alur yang baik untuk mengambil foto kemudian melakukan
kompresi image dan menyimpan ke file
ANSWER:
Pada react native, terdapat package expo-camera untuk mengambil suatu gambar. apabila url string dari gambar telah didapatkan, kita dapat mengkompres gambar tersebut menggunakan package yang bernama react-native-compress-image