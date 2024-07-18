const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://replit.com/@joniemarie28/Suhail-Md-11#config.js"                       // put your app url here,
global.email ="joniemarie28@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_46_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieHN1OGVCUmpQUElGdTJKWVV0L1ZSK253bjlGc1VVNmFvTW5ZTGtHQUZvdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicXlrd2tnSFFRX0dfMERvbkk4RTVOQVwiLFxuICBcInBob25lSWRcIjogXCJhNmJkNTU0Yy1iY2QxLTRiYWUtOWJlZS1hNDdlNTkyOGFjZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMjI0LFxuICAgICAgMyxcbiAgICAgIDUyLFxuICAgICAgMTI0LFxuICAgICAgODksXG4gICAgICA1NixcbiAgICAgIDIwNyxcbiAgICAgIDE2NixcbiAgICAgIDIxOSxcbiAgICAgIDEsXG4gICAgICAyMzUsXG4gICAgICAyMjUsXG4gICAgICAxMCxcbiAgICAgIDEyNCxcbiAgICAgIDI0MCxcbiAgICAgIDIzMixcbiAgICAgIDEyMixcbiAgICAgIDk3LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDkyLFxuICAgICAgMjQwLFxuICAgICAgMjMzLFxuICAgICAgNixcbiAgICAgIDIxNixcbiAgICAgIDU1LFxuICAgICAgODYsXG4gICAgICAxMjUsXG4gICAgICA4MyxcbiAgICAgIDQ3LFxuICAgICAgMTcwLFxuICAgICAgNTMsXG4gICAgICA5OCxcbiAgICAgIDEyNixcbiAgICAgIDIxNyxcbiAgICAgIDU1LFxuICAgICAgMTIxLFxuICAgICAgMjM3LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllBRDRCMTc1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU1Mjc2MTM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTMyOTU3MTU4MTk3NjQ6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimaBM251SROKZpuC5m+KZpkNoRWdF4pmgXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZWejd3Q0VPR3IyclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDb2FrT2psK0dnanI1QU4zZHpQZGJkT1J0YjhLRzdTNGxmUUhmRVMvcFNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFmc1pDbENXVnJ2Wi9uZU4yK1pOR0h4SjIrRW4yNklFWUE3WnZWdUdDbTBkSDh1S09JTUd3QUpGb3Y0QW5wQXRBVnlVdmpNUW8wQkZQOVZ3NDl3Q0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJLOVN0SUVGSjNScXF2cVpZMUp6OUt0ODZKZFYvVDUzOU5qRnphTmZUUWI2a0FRVFBtMHUyUE1zSWZ2TUVtamN0MDBQUXh4bHRObk45V3lNMmtLMGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NTUyNzYxMzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTQ0ODA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVJvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVcFNoellaUlh3ankwTWhKelorVUNqK0h1VVNGSThuSTEwVGZIOGRZandBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NDAwNTMyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMTQ0ODA4MjE1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
