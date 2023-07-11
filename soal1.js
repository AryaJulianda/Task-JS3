// Buatlah sambungan program menggunakan then catch dan juga try catch untuk
// mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan
// then catch dan try catch dengan memberikan komentar di bawahnya

const cekHariKerja = (day) => {
    console.log('Loading...')
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {return item === day})
        
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })  
}



// then catch
cekHariKerja('senin')
    .then(result => console.log(`Hari ${result} adalah hari kerja`))
    .catch(err => console.log(err))


// method "then catch" digunakan untuk menangani hasil dari suatu promise
// method "then" akan dipanggil ketika promisenya "resolve"(selesai dikerjakan)
// method "catch" akan dipanggil ketika promisenya "reject"(gagal dikerjakan)
    

// try catch
// let hari = "senin";

// async function main() {
//     try {
//       const result = await cekHariKerja(hari)
//       console.log(`Hari ${result} adalah hari kerja`) // Menampilkan hasil resolvenya ke console
//     } catch (error) {
//       console.error(error) //jika gagal , menampilkan error di console
//     }
// }
  
// main()


// try catch digunakan untuk menangani Error dalam JavaScript. 
// Blok 'try' berisi kode yang ingin dijalankan 
// dan blok 'catch' berisi kode yang ingin dijalankan apabila terjadi kesalahan.