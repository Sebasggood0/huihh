
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/20b04f440534d860564c2.jpg'
m.react('✅')
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
 🌸 𝘊𝘈𝘕𝘈𝘓 🌸
• ${fgcanal}

 🌸 𝘎𝘓𝘖𝘉𝘈𝘓 🌸
• ${bgp2}

 🌸 𝘈𝘝𝘐𝘚𝘖𝘚 🌸
• ${bgp}

 🌸 grupo 🌸
• https://chat.whatsapp.com/FtHuuywwNMQGgRTVbL7lwH

🌸 ramirez  𝘎𝘓𝘖𝘉𝘈𝘓 🌸
•https://chat.whatsapp.com/CXMhGnyK82R94qdUGzzpJp
`
await conn.sendButton(m.chat, estado, 'by: sebas', pp, [
['🤴 DUEÑO 🤴', '.owner'], ['☁️ DONAR ☁️', '.donate']], null, [['🌸 CANAL 🌸', `${fgcanal}`]], m)
}
handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^(grupos|groups|support?)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


