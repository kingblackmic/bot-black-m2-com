const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'ItzCasper|YT#1451:) ',
     details: `I'm : KBOOSH - Developer and Programmer`,
     url: 'http://twitch.tv/Streammingg',
     state: `إنْ لَمْ تَجِد لكْ حآقدْ إعلمْ أنْك إنسآن فآشِلْ`,
    application_id: '281376075802476544',
     assets: {
        small_image: `366835431037337600`,
        small_text: ' Take This ! ' ,
        large_image: `370451271133429760`,
        large_text: `ҜṦẰ.OMA♥` }

  }
    });
});


client.login('NDI3MTcxODc2NDIzNTk4MDkx.DZgqXA.NM28qODc8pqetxYoYHb1iIxYXco');
