
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
global.themeemoji = "🇲🇨" //ur theme emoji
global.packname = "ᴅɪᴍᴀs ʙᴏᴛᴢᴢ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n 🜲⁩🇲🇨🜲" //ur sticker watermark packname
global.author = "'🜲⁩•︻ཉོ༙ཬ❰❰𝘽𝙖𝙣𝙝 𝘿𝙞𝙢𝙨❱❱❱章브๏❨𝙓𝙔𝙕❩๏ຼົะ»•🜲\n𝙉𝙤𝙢𝙤𝙧 𝘽𝙤𝙩 0882003779593\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🜲⁩ 𝘿𝙞𝙢𝙖𝙨 𝘽𝙤𝙩-𝙈𝘿 🜲" //ur sticker watermark author
global.wm = "🦠⃢⃟⃝🦠𖣐𝘿𝙄𝙈𝘼𝙎 𝘽𝙊𝙏𝙕𝙕𖣐🦠⃢⃟⃝🦠⁩" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Nih Kak✅',
    admin: 'Fitur Ini Hanya Dapat Digunakan Oleh Admin😬',
    botAdmin: '📌Bot Harus Jadi Admin Dulu🥲',
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
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
