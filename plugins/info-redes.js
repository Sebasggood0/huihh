
let handler = async(m, { conn, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

    let don = `
🌸 *REDES OWNER* 🌸

🌸 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗗𝗘𝗟 𝗕𝗢𝗧 🌸
 wa.me/56939026360

🌸 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 🌸
 https://www.instagram.com/saquenmedelserver_/

🌸 grupo 🌸
https://chat.whatsapp.com/FtHuuywwNMQGgRTVbL7lwH
> ${mssg.ig}
`
let img = 'https://telegra.ph/file/cb42a7ab77c44d16bc7f0.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, fkontak, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['redes']
handler.tags = ['info']
handler.command = ['redes'] 

export default handler
