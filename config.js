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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_05_42_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVoYTRYYm94VHAzcExGZkgxdEMwU3NwdG9IOTdtT3h2Uy9wMFRUc0xKZWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQ1NTI3NjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1ODcyMjJCM0VBMTZDNkE5MEFCODhBMDkzMzUzMkUwM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNjc3MzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV3dOWGk4clZSS2VISkE0c01VdnFNQVwiLFxuICBcInBob25lSWRcIjogXCJjZTk2MDc1NS04MzRiLTQzYzgtYWU5NS02YmRhNDhjMzhjNjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgNTcsXG4gICAgICAxMTMsXG4gICAgICAyMzAsXG4gICAgICAwLFxuICAgICAgNTYsXG4gICAgICAxMDAsXG4gICAgICA0OCxcbiAgICAgIDEwOCxcbiAgICAgIDQyLFxuICAgICAgMTYsXG4gICAgICA3OCxcbiAgICAgIDc4LFxuICAgICAgMTM3LFxuICAgICAgMzAsXG4gICAgICAxMzUsXG4gICAgICAxNTksXG4gICAgICAyNTEsXG4gICAgICA3NSxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICA3NixcbiAgICAgIDE3MyxcbiAgICAgIDY4LFxuICAgICAgMjQ0LFxuICAgICAgNDMsXG4gICAgICAzLFxuICAgICAgMzUsXG4gICAgICAxNDMsXG4gICAgICAyMTksXG4gICAgICAxODgsXG4gICAgICAwLFxuICAgICAgMTc0LFxuICAgICAgMTI4LFxuICAgICAgMTQ3LFxuICAgICAgODAsXG4gICAgICAxNTcsXG4gICAgICA0NCxcbiAgICAgIDI5LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk00TU5UMU02XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU1Mjc2MTM6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTMyOTU3MTU4MTk3NjQ6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNelZ6N3dDRUsvNTU3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNvYWtPamwrR2dqcjVBTjNkelBkYmRPUnRiOEtHN1M0bGZRSGZFUy9wU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSTRXckw3N0dQR0tnai92MytPUlBwa2hiSVJaTXNCcVBlUlpyRHE3ZVV5UEU4SGoxT3hOL0VjNmFsR0dnNlg0VytXblhRYlhodEptMHk3d05abTBlRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK1g2RHRCc3NtdmJVSWthZEVDUnFQdVh0NlIzZTlRTnBwZHl4TC84OTVXa2EzNlVKWmZVRGt0RG9pNGYybTdQSU9tZ3AyMEk4dmJFY0tjVm0wUVNrakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NTI3NjEzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNjc3MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVSby5qc29uIjogIntcImtleURhdGFcIjpcIlVwU2h6WVpSWHdqeTBNaEp6WitVQ2orSHVVU0ZJOG5JMTBUZkg4ZFlqd0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY0MDA1MzIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
