// 2. Buat program menggunakan callback function untuk melanjutkan dan
// menampilkan semua bulan menggunakan method map

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January','February','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
        if (!error) {
            callback(null,month)
        } else {
            callback(new Error("Sorry Data Not Found"),[])
        }
    },4000)
}


// Menggunakan callback function dan method map untuk melanjutkan dan menampilkan semua bulan
getMonth((error, months) => {
    if (error) {
        console.log(error);
    } else {
        months.map((month) => {
            console.log(month);
        });
    }
});


// Pada contoh di atas, fungsi getMonth menerima sebuah callback function sebagai argumen. Setelah penundaan 4 detik (simulasi pengambilan data), fungsi tersebut akan memanggil callback function dengan argumen null jika tidak ada error, atau dengan argumen new Error("Sorry Data Not Found") jika terjadi error.

// Kemudian, saat memanggil getMonth, kita menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map. Jika tidak ada error, setiap bulan akan ditampilkan di console. Jika terjadi error, pesan error akan ditampilkan di console.