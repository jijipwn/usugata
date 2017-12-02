const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

//to use download node.js, then open cmd in the folder usugata.js is in, type "npm i --save discord.js" after thats done
//type "node usugata.js"

client.on('ready', () => {
  console.log('usugata is alive');
  client.user.setStatus('dnd')
  client.user.setGame('with my DS')
});


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
     case "info":
	   var embed = new Discord.RichEmbed()
          .addField("Info", "I'm usugata, I'm here to help you on the /r/NDShacks Discord")
		  .setColor(0x7e8a9e)
		  .setFooter("usugata");
         message.channel.send(embed);
     break;
     case "guide":
	   var embed = new Discord.RichEmbed()
          .addField("Guide", "[click here!](https://dsiguide.me)")
          .setColor(0x7e8a9e)
		  .setFooter("usugata");
         message.channel.send(embed);
     break;
     case "help":
	   var embed = new Discord.RichEmbed()
          .addField("usugata", "Here are my Commands:", true)
          .addField("Prefix", "My Prefix is **.**", true)
          .addField("Info", "Gives you info on the bot",)
          .addField("Guide", "Gives you a link to the DSi Guide",)
          .addField("Help", "Tells you this Message",)
          .addField("Reddit", "Gives you a link to the subreddit",)
          .setColor(0x7e8a9e)
          .setThumbnail(message.client.user.avatarURL)
		  .setFooter("usugata");
         message.channel.send(embed);
     break;
     case "reddit":
	   var embed = new Discord.RichEmbed()
          .addField("Reddit", "[Here!](https://reddit.com/r/NDShacks)")
		  .setColor(0x7e8a9e)
		  .setFooter("usugata");
         message.channel.send(embed);
     break;
     default:
	  var embed = new Discord.RichEmbed()
		  .addField("usugata", "The command you've typed does not exist. try .help!")
		  .setColor(0x7e8a9e)
		  .setFooter("usugata");
		 message.channel.send(embed);
  }
});


client.login('add your own bot token');
