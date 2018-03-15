const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '/*--*/') {
    msg.reply('Pong!');
  }
});

client.login('MjU3MTExNDc2NDA0MjI0MDAx.DYmG3w.UQyBPtQ3nHcrzFU0_jG4aiqIgxY');
