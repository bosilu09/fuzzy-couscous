const Botversion = require("./hello.js")
  module.exports = {
  name: "menu",
  alias: ["help", "h", "helpm", "helpmenu","list"],
  desc: "Gives all bot commands list",
  react: "🗃️",
  category: "Core",
  start: async (
    Miku,
    m,
    { prefix, pushName, NSFWstatus, args, commands, text }
  ) => {
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `🍁Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`);
      if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `💡Example : ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `Menu` },
          type: 1,
        },
      ];
      let buth = {
        text: `ℹ️Command Info\n\n${data.join("\n")}`,
        footer: `Inovatech Bot`,
        buttons: buttonss,
        headerType: 1,
      };
      return Miku.sendMessage(m.from, buth, { quoted: m });
    } else {
      const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());

      let textHelpMenu = `Hi *${pushName}* ,

I am *Inovatech*, a bot developed by *𝐓𝐞𝐚𝐦 𝐍𝐎𝐕𝐀*.

Version :- _1.3.5 Stable_

💫 My prefix is: *${prefix}*

🧩 Server Uptime: *${uptime()}*

Here's the list of my Commands.\n
           
╭──────ꕥ Core ꕥ─────╮
├
├・✨ ʜɪ, ʜᴇʟᴘ,
├・✨ ᴄᴏᴜᴘʟᴇᴘᴘ, ᴏᴡɴᴇʀ,
├・✨ ꜱᴄʀɪᴘᴛ, ꜱᴛᴀʟᴋ,
├・✨ ꜱᴜᴘᴘᴏʀᴛ, ʀᴀɴᴋ
├
╰──────────────────╯
╭─────ꕥ Group ꕥ─────╮
├
├・✨ ᴀᴅᴍɪɴꜱ, ᴀɴɴᴏᴜɴᴄᴇ,
├・✨ ᴀɴᴛɪʟɪɴᴋɢᴄ, ʙᴏᴛꜱᴡɪᴛᴄʜ,
├・✨ ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ, ᴄʜᴀᴛʙᴏᴛɢᴄ,
├・✨ ᴅᴇʟᴇᴛᴇ, ᴘʀᴏᴍᴏᴛᴇ,
├・✨ ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ,
├・✨ ɢʀᴏᴜᴘ, ɢʀᴏᴜᴘɪɴꜰᴏ,
├・✨ ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ,
├・✨ ɴꜱꜰᴡ, ʀᴇᴍᴏᴠᴇ,
├・✨ ʀᴇᴘᴏʀᴛ, ʀᴇᴠᴏᴋᴇ,
├・✨ ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ,
├・✨ ᴛᴀɢᴀʟʟ, ᴡᴇʟᴄᴏᴍᴇ
├
╰──────────────────╯
╭──────ꕥ Mods ꕥ──────╮
├
├・✨ ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴇᴛᴇᴍᴏᴅ,
├・✨ ʙᴀɴ, ᴜɴʙᴀɴ,
├・✨ ʙᴀɴɢᴄ, ᴜɴʙᴀɴɢᴄ,
├・✨ ʙʟᴏᴄᴋ, ᴜɴʙʟᴏᴄᴋ,
├・✨ ʙʀᴏᴀᴅᴄᴀꜱᴛ, ᴄʜᴀʀʟɪꜱᴛ,
├・✨ ᴍᴏᴅᴇ, ʙᴀɴʟɪꜱᴛ,
├・✨ ᴘᴍᴄʜᴀᴛʙᴏᴛ, ᴄʜᴀʀʟɪꜱᴛ,
├・✨ ꜱᴇᴛᴄʜᴀʀᴀᴄᴛᴇʀ
├
╰──────────────────╯
╭──────ꕥ Media ꕥ─────╮
├
├・✨ ɪɢᴅʟ, ɪɢᴅʟ2,
├・✨ ᴘʟᴀʏʟɪꜱᴛ, ᴘʟᴀʏ,
├・✨ ʏᴛᴀᴜᴅɪᴏ, ʏᴛᴠɪᴅᴇᴏ,
├・✨ ʏᴛꜱ, ᴛɪᴋᴛᴏᴋ,
├・✨ ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ, ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ,
├・✨ ᴛɪᴄᴛᴏᴋᴅᴏᴄ, ʏᴛᴅᴏᴄ,
├
╰──────────────────╯
╭─────ꕥ Search ꕥ─────╮
├
├・✨ ᴀɴɪᴍᴇ, ɢɪꜰꜱᴇᴀʀᴄʜ,
├・✨ ɢɪᴍᴀɢᴇ, ᴘɪɴᴛᴇʀᴇꜱᴛ, 
├・✨ ɢɪᴛʜᴜʙ, ɢᴏᴏɢʟᴇ, 
├・✨ ʟʏʀɪᴄꜱ, ʀɪɴɢᴛᴏɴᴇ, 
├・✨ ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ, ᴡᴇᴀᴛʜᴇʀ, 
├・✨ ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
├
╰──────────────────╯
╭────✨ Utilities ✨────╮
├
├・✨ ᴇᴍᴏᴊɪᴍɪx, Q / Qᴜᴏᴛᴇ,
├・✨ ꜱᴛɪᴄᴋᴇʀ, ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ,
├・✨ ꜱᴛᴇᴀʟ, ᴛᴏᴀᴜᴅɪᴏ,
├・✨ ᴛᴏᴍᴘ3, ᴛᴏᴍᴘ4,
├・✨ ᴛᴏᴜʀʟ, ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ,
├・✨ ᴛᴇxᴛᴅᴇꜱɪɢɴ
├
╰──────────────────╯
╭────✨ Image Edit ✨────╮
├
├・✨ ʙʟᴜʀ, ᴄɪʀᴄʟᴇ,
├・✨ ᴊᴀɪʟ, ʀᴇᴍᴏᴠᴇʙɢ,
├・✨ ᴛʀɪɢɢᴇʀ
├
╰──────────────────╯
╭────ꕥ Audio Edit ꕥ────╮
├
├・✨ ʙᴀꜱꜱ, ʙʟᴏᴡɴ,
├・✨ ᴅᴇᴇᴘ, ꜰᴀᴛ,
├・✨ ɴɪɢʜᴛᴄᴏʀᴇ, ʀᴇᴠᴇʀꜱᴇ,
├・✨ ʀᴏʙᴏᴛ, ꜱʟᴏᴡ,
├・✨ ꜱᴍᴏᴏᴛʜ, ᴛᴇᴍᴘᴏ
╰──────────────────╯
╭────ꕥ Essentials ꕥ────╮
├
├・✨ ᴇʟᴇᴍᴇɴᴛ, ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
├・✨ Qᴜᴇꜱᴛɪᴏɴ, ꜱᴀʏ,
├・✨ ꜱᴀʏᴊᴀᴘᴀɴᴇꜱᴇ, ꜱᴀʏʙᴇɴɢᴀʟɪ,
├・✨ ꜱᴀʏʜɪɴᴅɪ, ᴜᴅɪᴄᴛɪᴏɴᴀʀʏ
├
╰───────────────────────╯
╭────ꕥ Weeb ꕥ────╮
├
├・✨ ᴀɴɪᴍᴇQᴜᴏᴛᴇ, ᴄᴏꜱᴘʟᴀʏ,
├・✨ ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ, ꜰᴏxɢɪʀʟ,
├・✨ ᴍᴀɪᴅ, ᴡᴀʟʟᴘᴀᴘᴇʀ,
├・✨ ᴡᴀɪꜰᴜ
├
╰──────────────────╯
╭────ꕥ Reactions ꕥ────╮
├
├・ ✨ ʙᴇʜᴀᴘᴘʏ, ʙɪᴛᴇ,
├・ ✨ ʙᴏɴᴋ, ʙᴜʟʟʏ,
├・ ✨ ᴄʀʏ, ᴅᴀɴᴄᴇ,
├・ ✨ ʜᴀɴᴅʜᴏɴᴅ, ʜᴀᴘᴘʏ,
├・ ✨ ʜɪɢʜꜰɪᴠᴇ, ʜᴜɢ,
├・ ✨ ᴋɪᴄᴋ, ᴋɪʟʟ,
├・ ✨ ᴋɪꜱꜱ, ᴘᴀᴛ,
├・ ✨ ꜱʟᴀᴘ, ꜱᴍɪʟᴇ,
├・ ✨ ᴡᴀᴠᴇ, ᴡɪɴᴋ,
├・ ✨ ʏᴇᴇᴛ
├
╰──────────────────╯
╭────ꕥ Logo Maker ꕥ────╮
├
├・ ✨ 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ,
├・ ✨ 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
├・ ✨ ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
├・ ✨ ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ,
├・ ✨ ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ,
├・ ✨ ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ,
├・ ✨ ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ,
├・ ✨ ᴅᴇᴇᴘꜱᴇᴀ, ᴅᴇᴍᴏɴ,
├・ ✨ ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ,
├・ ✨ ᴄʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3
├・ ✨ ɢʀᴀꜰꜰɪᴛɪ, ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ,
├・ ✨ ᴊᴏᴋᴇʀ, ʟɪᴏɴ , ᴍᴀɢᴍᴀ,
├・ ✨ ᴍᴀᴛʀɪx, ɴᴇᴏɴ,
├・ ✨ ɴᴇᴏɴᴅᴇᴠɪʟ, ɴᴇᴏɴɢʀᴇᴇɴ,
├・ ✨ ɴᴇᴏɴʟɪɢʜᴛ, ᴘᴀᴘᴇʀᴄᴜᴛ,
├・ ✨ ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ,
├・ ✨ ꜱᴄɪꜰɪ, ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ,
├・ ✨ ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2,
├・ ✨ ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ, ᴡᴀʟʟ,
├・ ✨ ᴡᴏʟꜰ
├
╰──────────────────╯
╭────ꕥ Mine Craft ꕥ────╮
├
├・ ✨ ʙᴜʏ, ɪɴᴠᴇɴᴛᴏʀʏ,
├・ ✨ ᴍɪɴᴇ, ꜱʜᴏᴘ,
├・ ✨ ʀᴇɢ-ɪɴᴠ,
├
╰──────────────────╯
╭────✨ ECONOMY ✨────╮
├
├・ ✨ ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ,
├・ ✨ ᴅᴀɪʟʏ, ᴅᴇᴘᴏꜱɪᴛ,
├・ ✨ ɢᴀᴍʙʟᴇ, ʟʙ,
├・ ✨ ʀᴏʙ, ꜱʟᴏᴛ,
├・ ✨ ᴛʀᴀɴꜱꜰᴇʀ, ᴡᴀʟʟᴇᴛ,
├・ ✨ ᴡɪᴛʜᴅʀᴀᴡ
├
╰──────────────────╯\n\n`;

      if (NSFWstatus == "true") {
        textHelpMenu += `ɴꜱꜰᴡ ɪꜱ ʀᴏᴍᴏᴠᴇᴅ ʙʏ ᴅᴇᴠꜱ \n\n `;
      }

      textHelpMenu += `*🔰  Inovatech Bot by 𝐓𝐞𝐚𝐦 𝐍𝐎𝐕𝐀  🔰*
 _Powered By:_ *𝐓𝐞𝐚𝐦 𝐍𝐎𝐕𝐀*

✨ To use any of these commands type " *${prefix}Command name* ".

✨ To get Support Group link type " *${prefix}support* ".

✨ To report any issues to Developer type " *${prefix}report <describe issue>* ".\n`;

      let favSongs = [
        "mihirawee",
        "eka diga kathawak",
        "Numba ha slowed + reverb",
      ];

      let selectedSong = favSongs[Math.floor(Math.random() * favSongs.length)];

      let buttons = [
        {
          buttonId: `${prefix}owner`,
          buttonText: { displayText: "🦸‍♂️ Bot Owner 🦸‍♂️" },
          type: 1,
        },
        {
          buttonId: `${prefix}repo`,
          buttonText: { displayText: "🧬 Source Code 🧬" },
          type: 1,
        },
        {
          buttonId:`${prefix}play ${selectedSong}`,
          buttonText: { displayText: `🎶 Song of the day 🎶` },
          type: 1,
        },
      ];
      let buttonMessage = {
      
        video: { url: 'Commands/Core/menubg.mp4' }, gifPlayback: true,
        caption: textHelpMenu,
        
        footer: `*Inovatech Bot | 𝐓𝐞𝐚𝐦 𝐍𝐎𝐕𝐀*`,
        headerType: 4,
      };

      await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
    }
  },
};