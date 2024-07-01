//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3014bc2b606aee8802202.jpg";
global.devs = "923556669498";
global.sudo = process.env.SUDO || "923556669498";
global.owner = process.env.OWNER_NUMBER || "923556669498";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0w4R0dsVEIvaE9wWHN0bTkzVUNRODFTMXp5a3FMVmlOOSs0UE1WR0UzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZktNa2RxdXVhZzVFcUd1SVp1STc3aHgwMUJtdU4rWUJ6VjB1OFFYajhqdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTHhaYmpQK2M5YjVkbUxxTW1uQSt2Y094TUVXMUFGOExzMGhOU2lwQVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQW9uRmk4NzZ0cDc1ZGVGaS92Vk5xKzlmSm5tSHVFVW55NXBTQnJ2eGhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLME9qSUR0aEt6K24veHVFUVFPMlZCYTNnOXJRQlg1dHRHRmJPenlQMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhSVHFkTzEybDZ1ZUhCcXVsZUpURllHT0hMUlJmeTRWOW9zUUQvSG53aFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdFazhpdjhmU0l5QU51UGdSNklKb1VkS3g5cDdpVk1KYzdRSDg4a3QyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakN3a3ZWVVdRTUVRNEpzcjhhNmRnaGZQNzl6dXdreU9tM1MrSU1TdnVIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhTcGFOSjZGZE9saUFyOVVLS1BxUTVLRG5QNzJiUU5pNVU5c1o4WXdhR2FPNktyZWNMZ2wyUnQ1c20rdWVmbHNuczRjQVo4MHFCci9FaC8vNkM5c2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiVGUyQmJ0aHJQVDd2aUZHMFVpa0VJNkEyZmE5cW11L2Z6NDZZY1dLQTk3MD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM1NTY2Njk0OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMENEODdBOUQwQjUzRjBFQkY2NkM0ODA5QzU0NERBNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTgxMTUxMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib0tILWVrbFNTLXlfdHdIZ2J1MkxhUSIsInBob25lSWQiOiIzODU0ZWQ5OC0yOTQwLTQzYTAtYmJkOS1kNTJjZjM3NmRhMzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzdYdVA5T3B5KzRORUtYQit5cjluclV2UXdJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdkUngrY09nNFBnd2V2cFZoQ0l4Tkw5eS8rZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSMUxIRTY1QSIsIm1lIjp7ImlkIjoiOTIzNTU2NjY5NDk4OjgxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZU44c0lCRUtqN2lMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoUVpacHNBQ1IwMDloY2xmNTQra2dlVnREVE9qaGtLM2JkakdncURJMVdrPSIsImFjY291bnRTaWduYXR1cmUiOiJWMDVTajQ2d0VSckl6bnEwcGoyMHU1bmh6bU1jMUUwb1cwdW94Q2s1SEhQNnA5c0lEdy9EckgyR1gyZjZZM2FEY2h4MVJnY3dzaGY4YmNiWHhWRldEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRFI3NmpaQUdad0x4dzJXVDRpQWRHUFFmcmRkbUoreHZRS3QwenFkdWQ0c0FBT29qZDVZZ0habVBiOXNGbU1WSVlWR3hHeW9IenRQd1hBbmVVcGgxaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM1NTY2Njk0OTg6ODFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVVHV2FiQUFrZE5QWVhKWCtlUHBJSGxiUTB6bzRaQ3QyM1l4b0tneU5WcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTgxMTUwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFcEUifQ"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "File Generated by ARHAM-MUGHAL😍",
  author: process.env.PACK_AUTHER || "❖Mʀ᭄Arhamנ☆×͜×",
  packname: process.env.PACK_NAME || "♥❖Mʀ᭄Arhamנ☆×͜×",
  botname: process.env.BOT_NAME || "❖Mʀ᭄Arhamנ☆×͜×",
  ownername: process.env.OWNER_NAME || "❖Mʀ᭄Arhamנ☆×͜×",
  errorChat: process.env.ERROR_CHAT || "923556669498",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
