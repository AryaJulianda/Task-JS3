// 2. Buat program menggunakan callback function untuk melanjutkan dan
// menampilkan semua bulan menggunakan method map

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let months = ['January','February','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
        if (!error) {
            callback(null,months)
        } else {
            callback(new Error("Sorry Data Not Found"),[])
        }
    },4000)
}

getMonth((error, months) => {
    if (error) {
        console.log(error);
    } else {
        months.map((month) => {
            console.log(month);
        });
    }
});

