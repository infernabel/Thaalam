/* 

░██████╗████████╗░█████╗░██████╗░██╗░░██╗    ██████╗░░█████╗░██████╗░████████╗██╗
██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██║░██╔╝    ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║
╚█████╗░░░░██║░░░███████║██████╔╝█████═╝░    ██║░░██║██║░░██║██║░░██║░░░██║░░░██║
░╚═══██╗░░░██║░░░██╔══██║██╔══██╗██╔═██╗░    ██║░░██║██║░░██║██║░░██║░░░██║░░░██║
██████╔╝░░░██║░░░██║░░██║██║░░██║██║░╚██╗    ██████╔╝╚█████╔╝██████╔╝░░░██║░░░██║
╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝    ╚═════╝░░╚════╝░╚═════╝░░░░╚═╝░░░╚═╝
*/

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret : "199a619d22dd4e55a4a2c1a7a3d70e63",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "Streaming",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
        name: "Stark",
      password: "Stark",
      host: "78.46.65.243",
      port:  3538,
      secure: false
    }
  ]
}
