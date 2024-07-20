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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_15_17_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVWYzS2EwaXhRMTJhNEk0c3ZjL3VWN3IxeVk0ZmwvaTJraEczSVREQWtZUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid2ExSHB1Um1SOXVGTEZzaFM0M3laQVwiLFxuICBcInBob25lSWRcIjogXCI2OTk3ODJlNi03OTA5LTQ3YjYtYWRjNi01MzFlNzM5MDM5NWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjQ1LFxuICAgICAgOTYsXG4gICAgICAxMjgsXG4gICAgICAxMixcbiAgICAgIDE5OCxcbiAgICAgIDksXG4gICAgICAxMjIsXG4gICAgICAxMDQsXG4gICAgICA2MSxcbiAgICAgIDE1NyxcbiAgICAgIDIxNCxcbiAgICAgIDEwNyxcbiAgICAgIDI1MCxcbiAgICAgIDc2LFxuICAgICAgMjksXG4gICAgICAzMixcbiAgICAgIDE4MCxcbiAgICAgIDkwLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTcsXG4gICAgICAyMDcsXG4gICAgICAxMDYsXG4gICAgICA3LFxuICAgICAgMTE5LFxuICAgICAgMTMxLFxuICAgICAgMjUyLFxuICAgICAgOTIsXG4gICAgICAyOCxcbiAgICAgIDE2LFxuICAgICAgMTEwLFxuICAgICAgNTcsXG4gICAgICAyNDUsXG4gICAgICAyNTUsXG4gICAgICAyMCxcbiAgICAgIDE2OCxcbiAgICAgIDg2LFxuICAgICAgMTcwLFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0MTVaODg2WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NTI3NjEzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MzI5NTcxNTgxOTc2NDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM1Z6N3dDRU9tcDc3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNvYWtPamwrR2dqcjVBTjNkelBkYmRPUnRiOEtHN1M0bGZRSGZFUy9wU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWGFRTU9WV0JOZDg2S3JlMFpoVzE3b0NvMWZLMEU5RlJkdWJLcytEMWFZNGxaTTFZUFVHMVkzbDltTWxhbm9OZ0FMTTVNanNVeFUzNHdvLytEeXIxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR0F5TnE2WmR2aWdoeVR2THBLa3EwbEo2MW9ndWlWZEc3TU5xeGNNelRGL2M2RS9MdzZmVkp0RDlhbCtKTDB1N294Y2IzSS8yKzN1dSt6K1FidTd1akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NTI3NjEzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDg4NjIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVJzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrQnhyZXpCVWZyc2RQLzExKzI2UWdMNjlMLzdPdUFoeFVLaFBldndXcHZRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NDAwNTMyNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ4ODQzNzIwM1wifSIKfQ=="  // PUT your SESSION_ID 


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
