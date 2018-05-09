const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

client.on('ready', () => {
  console.log('usugata is alive');
  client.user.setStatus('dnd')
  client.user.setGame('PictoChat 📓')
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
     case "info":
	   var embed = new Discord.RichEmbed()
      .addField("Info <:usugata:387119258183794698>", "I'm usugata, I'm here to help you on the /r/NDShacks Discord")
		  .setColor(0x7e8a9e)
		  .setFooter("usugata");
         message.channel.send(embed);
         message.react('387119258183794698')
     break;
     case "guide":
	   var embed = new Discord.RichEmbed()
          .addField("Guide <:usugata:387119258183794698>", "The DSi Guide can be found [here](https://dsiguide.me)")
          .setColor(0x7e8a9e)
		  .setFooter("usugata");
         message.channel.send(embed);
         message.react('387119258183794698')
      break;
      case "cheats":
      var embed = new Discord.RichEmbed()
         .addField("Guide <:usugata:387119258183794698>", "Here is the approved Cheat Database's by DeadSkullzJr [Click Here!](https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/)")
         .setColor(0x7e8a9e)
         .setFooter("usugata");
             message.channel.send(embed);
             message.react('387119258183794698')
     break;
     case "help":
	   var embed = new Discord.RichEmbed()
          .addField("usugata <:usugata:387119258183794698>", "Here are my Commands:", true)
          .addField("Prefix", "My Prefix is **.**", true)
          .addField("Ping", "Pong! 🏓", true)
          .addField("Info", "Gives you info on the bot", true)
          .addField("Guide", "Gives you a link to the DSi Guide", true)
          .addField("Help", "Tells you this Message", true)
          .addField("Reddit", "Gives you a link to the subreddit", true)
          .addField("td", "Gives a link to ThreeDeus, a helpful downloading tool", true)
          .addField("cheats", "Gives you a link to the cheat databases run by DeadSkullzJr", true)
          .setColor(0x7e8a9e)
          .setThumbnail(message.client.user.avatarURL)
		      .setFooter("usugata")
      var embed2 = new Discord.RichEmbed()
          .addField("usugata <:usugata:387119258183794698>", "Help is on its way!")
          .setColor(0x7e8a9e)
     		  .setFooter("usugata")
         message.author.send(embed)
         message.channel.send(embed2)
         message.react('387119258183794698')
     break;
     case "reddit":
	   var embed = new Discord.RichEmbed()
          .addField("Reddit <:usugata:387119258183794698>", "You can enter the subreddit [Here!](https://reddit.com/r/NDShacks)")
		      .setColor(0x7e8a9e)
		      .setFooter("usugata");
         message.channel.send(embed);
         message.react('387119258183794698')
    break;
    case "td":
    var embed = new Discord.RichEmbed()
        .addField("ThreeDeus <:usugata:387119258183794698>", "ThreeDeus is a helpful tool for downloading files")
        .addField("DOWNLOAD:", "ThreeDeus can be downloaded [here.](https://github.com/jijipwn/ThreeDeus/releases/latest)")
        .setColor(0x7e8a9e)
        .setFooter("usugata");
        message.channel.send(embed);
        message.react('387119258183794698')
     break;
     case "ping":
     var embed = new Discord.RichEmbed()
          .addField("usugata <:usugata:387119258183794698>", ":ping_pong: Pong at " + (Date.now() - message.createdTimestamp) + " ms!")
          .setColor(0x7e8a9e)
          .setFooter("usugata");
         message.channel.send(embed);
         message.react('387119258183794698')
     break;
     default:
     message.react('❎')
  }
});

// 🇳

client.login('SuperSecretBotTokenHere');
