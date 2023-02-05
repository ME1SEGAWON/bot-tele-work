console.log('bot.js aktif!')

const TeleBot = require('telebot')
const delay = require('delay')
const { spawn } = require('child_process')
const child = spawn('pwd')
var { exec } = require('child_process')


const bot = new TeleBot('5614985554:AAHpH0UKAz7FnintkrGTQ-2dSPLMb33KbHI');


global.TOKEN = '5614985554:AAHpH0UKAz7FnintkrGTQ-2dSPLMb33KbHI'
global.token = '5614985554:AAHpH0UKAz7FnintkrGTQ-2dSPLMb33KbHI'

bot.on(['/start'], async (msg) => {
    let replyMarkup = bot.keyboard([
        ['/menu ✏️🗒', '/infomenu 🗒🔍',
        '/about 🤖❗️'],
    ], {resize: true});


await bot.sendPhoto(msg.from.id, './gambar/Welcome.png', { caption: `😎Halo Selamat Datang, ${msg.from.username || msg.from.first_name}! 👋\n____________\nHalo ini adalah BOT MINIWON Versi Telegram😄!\n____________\n
Gunakan perintah /menu untuk melihat semua fitur yang ada di Bot MINIWON, gunakan juga fitur /about untuk melihat tentang Bot MINIWON, dan gunakan perintah /infomenu untuk melihat informasi dan semua contoh perintah fitur yang ada di Bot MINIWON, terima kasih😉\n____________
\n🤖VERSI BOT MINIWON : v1.0🤖\n\nFixed /ytmp4✅\nAdded /igavatar✅\nFixed /twtdl✅\nAdded /tts✅\nAdded /saran✅\nAdded Keyboard✅\nRemake start, menu✅\nAdded /about✅\nAdded /nulis3✅`
})
return await bot.sendMessage(msg.from.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
})

bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.from.id, 'Gunakan /show untuk menampilkan keyboard!', {replyMarkup: 'hide'})
})

bot.on('/restart', msg => {
  exec('pm2 restart bot')
     bot.sendMessage(
        msg.from.id, 'merestart system')
}) 

bot.on('/show', msg => {
    let replyMarkup = bot.keyboard([
        ['/menu ✏️🗒', '/infomenu 🗒🔍',
        '/about 🤖❗️'],
    ], {resize: true});
    return bot.sendMessage(msg.from.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
})


bot.on(['/menu'], async (msg) => {
    return bot.sendMessage
(msg.from.id, `Created By : @SGWNNOTHERE\nLink Bot : https://telegram.me/MINIWON_BOT\n_______________\n\n🤖LIST FITUR BOT MINIWON🤖!\n
=====[DAFTAR MENU]=====\n> /nulis [teks]\n> /nulis2 [teks]\n> /nulis3 [teks]\n> /anime [nama anime]
> /animedl [nama anime]\n> /animedl2 [nama anime]\n> /filmtrend\n> /filmdetail [angka 1-20]
> /cekresi [kurir] [resi]\n> /brainly [pertanyaan]\n> /lirik [nama artis - judul lagu]\n> /saran [teks]
> /qrcode [teks]\n> /hartatahta [teks]\n> /tts [teks]\n> /pasangan [namamu] [pasanganmu]\n> /translate [teks]\n> /terjemahan [teks]
> /rangkum [teks]\n> /megumin\n> /neko\n> /waifu\n> /cewecans\n> /wallpaper\n> /slots\n========================
\n===[Sosmed Downloader]===\n> /ytmp4 [link yt]\n> /ytmp3 [link yt]\n> /twtdl [link twitter]\n> /tiktokdl [link tiktok]
> /fbdl [link video facebook]\n> /igdl [link instagram]\n> /igtv [link instagram tv]\n> /igstory [angka] [username ig]
> /igavatar [username ig]\n========================\n
Kurang paham/kurang jelas ? => /infomenu
Ingin tau tentang Bot Heckayo ? => /about
`)
})



bot.on(['/infomenu'], async (msg) => {

return bot.sendMessage
(msg.from.id, `_______________\n\n🤖INFO MENU🤖!\n\n===[Info Menu Fitur Heckayo]===\n
/nulis = Untuk menulis tanpa membutuhkan pulpen atau kertas \n(Contoh Perintah : /nulis Halo nama saya ucup < sama dengan /nulis2 dan /nulis3)\n
/anime = Untuk mencari info seputar anime, jumlah episode, sinopsis, rating, dan lainnya \n(Contoh Perintah : /anime death note)\n
/cekresi = Untuk mengecek resi atau tracking paket lewat kurir dan resi yang di tulis \n(Contoh Perintah : /cekresi jne 4105xxxxxxxx320)\n
/brainly = Untuk mencari jawaban dari brainly \n(Contoh Perintah : /brainly kenapa bumi bulat)\n
/hartatahta = Untuk membuat teks harta tahta \n(Contoh Perintah : /hartatahta MFarelS:v)\n
/tts = Untuk merubah teks menjadi audio, suara by mbak mbak gugel :v \n(Contoh Perintah : /tts anjay mabar)\n
/lirik = Untuk mencari lirik musik \n(Contoh Perintah : /lirik vierra seandainya)\n
/megumin = Untuk mencari gambar megumin secara random atau acak \n(Contoh Perintah : /megumin)\n
/neko = Untuk mencari gambar neko atau kucing kawai secara random atau acak \n(Contoh Perintah : /neko)\n
/waifu = Untuk mencari gambar waifu secara random atau acak \n(Contoh Perintah : /waifu)\n
/wallpaper = Untuk mencari gambar wallpaper kece secara random atau acak \n(Contoh Perintah : /wallpaper)\n
/animedl = Untuk mencari link download anime dengan berbagai resolusi \n(Contoh Perintah : /animedl death note < Sama dengan /animedl2)\n
/pasangan = Untuk mengukur dan mencari sisi positif/negatif kamu dengan pasanganmu \n(Contoh Perintah : /pasangan udin aurel)\n
/translate = Untuk menerjemahkan dari bahasa inggris ke bahasa indonesia\n(Contoh Perintah : /translate you so beautiful)\n
/terjemahan = Untuk menerjemahkan dari bahasa indonesia ke bahasa inggris\n(Contoh Perintah : /terjemahan kamu sangat cantik)\n
/rangkum = Untuk merangkum teks atau memperpendek teks, \n(Contoh Perintah : /rangkum Penelitian tentang sejarah terbatas pada penelitian...........dst)\n
/qrcode = Untuk merubah teks atau link yang kamu tulis menjadi sebuah kode QR \n(Contoh Perintah : /qrcode https://google.com)\n
/filmtrend = Untuk melihat film trending di minggu ini \n(Contoh Perintah : /filmtrend)\n
/filmdetail = Untuk melihat detail filmtrend lebih lengkap \n(Contoh Perintah : /filmdetail 1)\n
/slots = Untuk bermain game slots casino \n(Contoh Perintah : /slots)\n
/cewecans = Untuk gacha gambar ciwi ciwi cantik :v \n(Contoh Perintah : /cewecans)\n
/saran = Untuk mengirim saran ke dev (MrHecka) lewat bot! \n(Contoh Perintah : /saran Bang saran tambahin fitur hack satelit nasa)\n
===[Sosmed Downloader]===\n
/ytmp4 = Untuk mendownload video dari youtube berformat mp4 \n(Contoh Perintah : /ytmp4 LINK YTNYA )\n
/ytmp3 = Untuk mendownload video dari youtube berformat mp4 \n(Contoh Perintah : /ytmp3 https://youtu.be/dQw4w9WgXcQ)\n
/tiktokdl = Untuk mendownload video dari tiktok tanpa watermark \n(Contoh Perintah : /tiktokdl https://www.tiktok.com/@mrhecka/video/6888202589897248001)\n
/fbdl = Untuk mendownload video dari facebook \n(Contoh Perintah : /fbdl https://www.facebook.com/tahilalats/videos/438923400430514)\n
/twtdl = Untuk mendownload video dari twitter \n(Contoh : /twtdl https://twitter.com/i/status/1338407494339624962)\n
/igdl = Untuk mendownload video dan foto di instagram \n(Contoh : /igdl https://www.instagram.com/p/CJGXxSinuld/)\n
/igtv = Untuk mendownload video igtv di instagram \n(Contoh : /igtv https://www.instagram.com/p/CBgc_ZJlVUN/)\n
/igstory = Untuk mendownload video ig story di instagram sesuai angka urutan yang diinput \n(Contoh : /igstory 3 anone14_)\n
/igavatar = Untuk mendownload avatar profil di instagram \n(Contoh : /igavatar anone14_)\n
=====================\n
Nantikan fitur-fitur unik heckayo lainnya, stay tuned terus ya 🦾🤖\n
_______________
`)

})


bot.on(['/about'], async (msg) => {
return bot.sendMessage
(msg.from.id, 
`
=====[🤖Tentang❗️]=====\n
> Tolong bot nya jangan di spam😣
> Cintai bot nya seperti kamu mencintai dia🤗
> Semua perintah yang membutuhkan teks tidak perlu menggunakan tanda kurung kotak => [ ]👈
> Masih bingung dengan fitur heckayo🤨? gunakan perintah /infomenu
> Bot masih dalam tahap pengembangan🔧
> Terima kasih sudah menggunakan Bot Heckayo😍
> Beritahu pembuat bot jika saya mati atau jika kamu menemukan bug dan perintah yang malfungsi => https://t.me/MrHecka (Atau lapor menggunakan /saran [text])
> Info Sosial Media :
> Facebook : https://www.facebook.com/MrHecka/
> Instagram : https://www.instagram.com/anone14_/\n
> Support BOT Heckayo Dengan Cara Donasi :
> https://saweria.co/heckayo
> https://paypal.me/mrplo/
> Pulsa => 082143012823
> BOT Heckayo Dibuat Oleh :
> @MrHecka\n
================
`)
})


// require disini!
require('./neko.js')(bot)
require('./anime.js')(bot)
// require disini!




bot.start()




