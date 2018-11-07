const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509546274887041025")
setInterval(function() {
channel.send(`ube youtube `);
}, 25)
})
 
 
client.login('NDUxNDYzODExODcwNzUyNzc4.Dr1DcQ.2z9uFamw5vRAqwe-l39e2OlbAo8');