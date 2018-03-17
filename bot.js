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

client.on('message', message => {
var prefix = "@";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312) return;


if (message.content.startsWith(prefix + 'playing')) {
  if (message.author.id !== 'botownerid') return message.reply('**only for the botowner **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Playing changed to`)
    message.react("👌")

} else

if (message.content.startsWith(prefix + 'setname')) {
  if (message.author.id !== 'botownerid') return message.reply('**only for the botowner **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : done`)
} else

if (message.content.startsWith(prefix + 'streem')) {
  if (message.author.id !== 'botownerid') return message.reply('**only for the botowner **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** streem changed to`)
    message.react("👌")

} else



if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== 'botownerid') return message.reply('**only for the botowner **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : Watching changed to`)
 message.react("👌")

}

 });

client.login('MjU3MTExNDc2NDA0MjI0MDAx.DYmG3w.UQyBPtQ3nHcrzFU0_jG4aiqIgxY');
