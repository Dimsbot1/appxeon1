
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6289603732786'] //ur owner number
global.ownername = "Bang Dimz" //ur owner name
global.ytname = "Gada Yt" //ur yt chanel name
global.socialm = "Gada" //ur github or insta name
global.location = "Indonesian, Boyolali, Central Java" //ur location

//bot bomdy 
global.ownernomer = "6289603732786" //ur number
global.premium = ['6289603732786'] //ur premium number
global.botname = 'Dimas Botzz' //ur bot name
global.linkz = "http://instagram.com/banh_dims0" //your theme url which will be displayed on whatsapp
global.websitex = "http://bit.ly/3XIUN0Y" //ur website to be displayed
global.botscript = 'https://chat.whatsapp.com/KI0v2RruYCUKllCfhyKWP3' //script link
global.themeemoji = "π²π¨" //ur theme emoji
global.packname = "α΄Ιͺα΄α΄s Κα΄α΄α΄’α΄’\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n π²β©π²π¨π²" //ur sticker watermark packname
global.author = "'π²β©β’οΈ»ΰ½ΰ½ΌΰΌΰ½¬β°β°π½ππ£π πΏππ’π¨β±β±β±η« λΈΰΉβ¨πππβ©ΰΉΰΊΌΰΊ»ΰΈ°Β»β’π²\nππ€π’π€π§ π½π€π© 0882003779593\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nπ²β© πΏππ’ππ¨ π½π€π©-ππΏ π²" //ur sticker watermark author
global.wm = "π¦ β’ββπ¦ π£πΏπππΌπ π½πππππ£π¦ β’ββπ¦ β©" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Nih Kakβ',
    admin: 'Fitur Ini Hanya Dapat Digunakan Oleh Adminπ¬',
    botAdmin: 'πBot Harus Jadi Admin Duluπ₯²',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'Cuma Bisa Di Gunakan Oleh Owner Saya',
    group: 'Fitur Ini Hanya Untuk Grup',
    private: 'Fitur Ini Hanya Bisa Di Gunakan Di Private Chat!',
    bot: 'Fitur Ini Hanya Dapat Digunakan Oleh Bot',
    wait: 'Wait...Sedang Di Proses Bot...',
    linkm: 'Link Nya Mana Tuan?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'Fitur Nsfw Belum Diaktifkan, Silahkan Hubungi Admin Untuk Mengaktifkannya',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: 'π',
level: 'ποΈ',
limit: 'π',
health: 'β€οΈ',
exp: 'π«',
money: 'π΅',
potion: 'π₯€',
diamond: 'π',
common: 'π¦',
uncommon: 'π',
mythic: 'π³οΈ',
legendary: 'ποΈ',
pet: 'π',
trash: 'π',
armor: 'π',
sword: 'βοΈ',
wood: 'πͺ΅',
batu: 'πͺ¨',
string: 'πΈοΈ',
horse: 'π',
cat: 'π',
dog: 'π',
fox: 'π¦',
petFood: 'π',
iron: 'βοΈ',
gold: 'π',
emerald: 'π',
budak: 'π',
busur: 'πΉ',
panah: 'π',
kapak: 'πͺ'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
