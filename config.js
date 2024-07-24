const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://lyrical4orty6yx:uv4Q2xZLHWnYuaXg@cluster0.fe3knid.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ $HVLOM 😇²²¹-ᴍᴅ" 


global.devs = "254732918481" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254732918481";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_57_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICA2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqb0dmdmhCSzBrdHY4U3I2bHlVTER4VDliVytIYm5RUmNZejRZRnVJRUVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2UkJqN19SelNKdTk5Y0xfNkhVNmVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcyMjljNDM5LTk1ODMtNDllZi05MzU0LTllM2JmY2M2NzA5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxNDgsXG4gICAgICAyMzIsXG4gICAgICAyMTMsXG4gICAgICAzMyxcbiAgICAgIDE4MCxcbiAgICAgIDEyNyxcbiAgICAgIDE5MixcbiAgICAgIDI0NyxcbiAgICAgIDI0NCxcbiAgICAgIDIwOSxcbiAgICAgIDUyLFxuICAgICAgMjA4LFxuICAgICAgMjUxLFxuICAgICAgMTc5LFxuICAgICAgMzgsXG4gICAgICAxNzgsXG4gICAgICAyMjAsXG4gICAgICAxMixcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAxMzUsXG4gICAgICAyMzcsXG4gICAgICAxNjIsXG4gICAgICAxOTYsXG4gICAgICA2MSxcbiAgICAgIDIyMCxcbiAgICAgIDEyMyxcbiAgICAgIDEwLFxuICAgICAgMTgzLFxuICAgICAgNjYsXG4gICAgICAxNjYsXG4gICAgICA0MSxcbiAgICAgIDYwLFxuICAgICAgMTEwLFxuICAgICAgMTgwLFxuICAgICAgMTYxLFxuICAgICAgNDcsXG4gICAgICAyMzksXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMlRUUkhHUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzMyOTE4NDgxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQxOTQwOTI2MTI0MTIwOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZCdC9jQ0VPV0dnYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIveGRRdE9qRzNFellDUVdIV0c3OFJ3NGlkbk51emlrbUM4MU9lZ1QzaDI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhNZXNnY1Z1dlBPY0dERVduVTE4K1BNN1RxVWNvVVpIbE1aRmFTNWxFVHI4N01VYjBtWmxuL0V6ZHJlUlQxeUZVSU9XUk1qbUo3U2ZjMU1tN3Y1MkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpCVlEwWUhJY2t2VkRlUm5hcy8zTmtwWWRqNGdITjJnT2ZDRytPZGpoVTlYTlZ3QWVjZi9ZS01wbEZXS2xyWkVTa09KWldVQWVaTEluaHVVeS9uWmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDczMjkxODQ4MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc3OTA0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFpNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWk0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiT1liR1BJUDF5UU9qS0Vyd0JJRzJlYnVYZWRWV0VkNGYvWmRodDB1b29Mcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODczNDE1MTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc3OTA1MzYzMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ♠L۝RD♦$HVLOM 😇²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "♦♠亗Ch͜͡EgeE亗♠♦",
  ownername:process.env.OWNER_NAME|| "$HVLOM 😇",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
