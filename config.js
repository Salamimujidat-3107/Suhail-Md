const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348025130003";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_57_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnB1WEFFT0wzbWdrby90RGR4WHFtRmtEWWJrdEd6VXpRdTdOUGVPTFRkUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSVlzWkVoSDBUTnloVFlRbEQyZnhrQVwiLFxuICBcInBob25lSWRcIjogXCI2ZjhjMjEzOS1mNGYzLTQ0MjEtODczZS02YmVlMTFkOTkzMTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgOTMsXG4gICAgICAyMyxcbiAgICAgIDE2OCxcbiAgICAgIDExMCxcbiAgICAgIDc4LFxuICAgICAgMTY4LFxuICAgICAgNzQsXG4gICAgICAxMTEsXG4gICAgICAxMTEsXG4gICAgICA5NSxcbiAgICAgIDE4OSxcbiAgICAgIDIzLFxuICAgICAgMTA3LFxuICAgICAgMTU5LFxuICAgICAgMTU3LFxuICAgICAgOTEsXG4gICAgICAzMSxcbiAgICAgIDk2LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDk5LFxuICAgICAgMTU1LFxuICAgICAgMjI0LFxuICAgICAgMjM0LFxuICAgICAgMjAyLFxuICAgICAgNTgsXG4gICAgICAzMixcbiAgICAgIDg1LFxuICAgICAgODEsXG4gICAgICAyNDgsXG4gICAgICA2NyxcbiAgICAgIDE5OCxcbiAgICAgIDI1LFxuICAgICAgMTgsXG4gICAgICAxNjcsXG4gICAgICAzNCxcbiAgICAgIDIwNixcbiAgICAgIDM4LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNTOE45TFdQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI1MTMwMDAzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg4Nzc2OTc0MDA4NTEwOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE9QcmNNQkVJN1grclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpOXlpOUszQkQxbHNKZHJTb1owRUVnWXNYZ1ZzckJtb3d5cERQMXVrU0g0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVSN1lHVjJCUDRWZXJlTTlUUXdtYUtMN0RIVmVTOGVVUzNZaC9ZeEZDd0F5S0RHSDVsb3VKbUJpWWEwa3E4aURXSm51UGcxbndZSElyd1B2alBmL0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVCeUc0SnhSNEtMWndkVzZla0RMbWlOaDZheXZMR0NrSXdrRTI0SFpabVJIUHdweXRvSHhiTm9PeGdQN05Edm5wQWtnWlhJR25KMDM4WXpYRlk2cWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjUxMzAwMDM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY3NDY0MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
