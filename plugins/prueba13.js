let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('⭐')

let m2 = `
🌸 𝐘𝐔𝐌𝐈𝐊𝐎 メ 𝐁𝐎𝐓  🌸

╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐆𝐈𝐓𝐒
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮ 
┃ ✰.sebas
┃ ✰.alek
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰

╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐍𝐌𝐑𝐒
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮
┃ ✰.𝐀𝐍𝐆𝐋:+56 939026360
┃ ✰.𝐀𝐋𝐄:+34 604 85 45 11
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰

╔════════⫹✰⫺════════╗
║    𝐌𝐄𝐍𝐔 メ 𝐌𝐀𝐃𝐄 𝐈𝐍
╠════════⫹✰⫺════════╝
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰
┃╭━─━─━──≪ ✧ ≫─━──━─━╮
┃ ✰."𝐓𝐈𝐓𝐀𝐍 𝐓𝐄𝐀𝐌 シ︎"
┃╰━─━──━─≪ ✧ ≫─━──━─━╯
✧⃝━━━━━━━━⧔✰⧕━━━━━━━✰`
        let pp = 'https://i.ibb.co/KxNss3N/file.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\n 🌸 𝐘𝐔𝐌𝐈𝐊𝐎 𝐁𝐎𝐓 🌸 \n
𝐋𝐀 𝐌𝐄𝐉𝐎𝐑 𝐑𝐄𝐘𝐍𝐀`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 メ 𝐌𝐄𝐍𝐔 シ︎', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, fwc)

}
handler.help = ['Creditos']
handler.tags = ['main']
handler.command = ['Creditos', 'creditos', 'credito', 'credit'] 

export default handler
