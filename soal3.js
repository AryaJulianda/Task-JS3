// Program cek waktu sekarang
const getCurrentTime = () => {
    console.log('Loading...');

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(Date());
            reject(new Error('Terjadi kesalahan'));
        },2000);
    });
}

getCurrentTime()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))



// Program cek palindrom
function cekPalindrom(word) {
    return new Promise((resolve, reject) => {

        const reversedWord = word.split('').reverse().join('');

        if (reversedWord === word) {
            resolve(`${word} adalah palindrom.`);
        } else {
            reject(`${word} bukan palindrom.`);
        }
    });
}

async function main(){
    try{
        const word = 'Kodok';
        const result = await cekPalindrom(word.toLowerCase());
        console.log(result);
    } catch(err) {
        console.log(err)
    }
}

main();