const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.ownerNumber = ["6281235144606@s.whatsapp.net"]
global.namabotnya = 'Kadibot'
global.namaownernya = 'Daffa'
global.packname = '\n\n\n\n\n\n\n\n\n\n© KirBotz||+62🇲🇨\nI`m From Indonesia\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nWa : 0877-0504-8235\nYT : KirBotz×\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'kirbotz'
global.lolkey = 'RINTISTOD'
global.dapkey = 'Kirbotz123'
global.apikey ='DAFFAGANTENG'
global.dapskey ='DAFFAGANTENG'
global.email = 'tesheroku123@gmail.com'
global.group = 'https://bit.ly/38oNU0D'
global.youtube = 'https://bit.ly/39Ivus6'
global.website = 'https://bit.ly/3yk3gOo'
global.github = 'https://bit.ly/3FqVBj8'
global.noown = 'https://wa.me/6281235144606'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.api = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User KirBotz Silahkan Register Terlebih Dahulu Click Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);