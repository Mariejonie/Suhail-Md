const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://replit.com/@joniemarie28/Suhail-Md-11#config.js"                       // put your app url here,
global.email ="joniemarie28@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://lyrical4orty6yx:uv4Q2xZLHWnYuaXg@cluster0.fe3knid.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa,Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙy ♠L۝RD♦๛♦ChEgE♠-ᴍᴅ" 


global.devs = "254745527613" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254745527613";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745527613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_17_45_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkkvZDIvaWkyelhnWXlDWFZpWnRCUHZwVUdiWDJ3Y3N5TFduQnh2NUdNc3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkx1MjgxWXlVVHB5LTB1cDllb0EtRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzRiZDljYjYtYzFmYS00ZGRjLTljOWUtMjQwYWIwMGQ2Mjg1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjQzLFxuICAgICAgMjE3LFxuICAgICAgMTQyLFxuICAgICAgMTg4LFxuICAgICAgMjQ5LFxuICAgICAgMTU5LFxuICAgICAgMTYxLFxuICAgICAgMTk0LFxuICAgICAgMTg5LFxuICAgICAgODcsXG4gICAgICAyMzUsXG4gICAgICAzMSxcbiAgICAgIDEwNSxcbiAgICAgIDU5LFxuICAgICAgMTA5LFxuICAgICAgMjYsXG4gICAgICAxMDgsXG4gICAgICAxLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDg3LFxuICAgICAgMjQ2LFxuICAgICAgMTYxLFxuICAgICAgMTEzLFxuICAgICAgMTI1LFxuICAgICAgNjEsXG4gICAgICA5LFxuICAgICAgMTk0LFxuICAgICAgMTE1LFxuICAgICAgNzEsXG4gICAgICAyMDgsXG4gICAgICAzMSxcbiAgICAgIDIwMCxcbiAgICAgIDMsXG4gICAgICAxOTQsXG4gICAgICAyMTgsXG4gICAgICAxMDcsXG4gICAgICA1MyxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZUUE0OUUxSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NTI3NjEzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkzMjk1NzE1ODE5NzY0OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXpWejd3Q0VKU3A1YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDb2FrT2psK0dnanI1QU4zZHpQZGJkT1J0YjhLRzdTNGxmUUhmRVMvcFNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlR5VnhhSU5tY3V1MGc4a3VMcjQ5QWNiRm1iTEM3cUF6ZE43QjNzV25EWEtqYjNybjl3TklmclQybEtsdzQ2TXllaGo1Nng4cnBzRUpSWTNYMzJINUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBLSTJCY04wbkxGYmNwaGM2S0RCa2xIZXpwMlI1ZUp2ajBGM3AzTktldndQUzFsd0E1UTJUYjNFZVh1VE9Va1MrYmdlS1hBdDV3cFROaDRlVVhaSGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NTUyNzYxMzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzI0Njk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVJvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVcFNoellaUlh3ankwTWhKelorVUNqK0h1VVNGSThuSTEwVGZIOGRZandBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NDAwNTMyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ♠L۝RD♦๛♦ChEgE♠²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "♦♠亗Ch͜͡EgeE亗♠♦",
  ownername:process.env.OWNER_NAME|| "♠L۝RD♦๛♦ChEgE♠",


  errorChat : process.env.ERROR_CHAT || "sorry ♦♠亗Ch͜͡EgeE亗♠♦ is not responding",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "♦♠亗Ch͜͡EgeE亗♠♦"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "null", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
