const Eris = require("eris");

// Replace BOT_TOKEN with your bot account's token
var bot = new Eris.CommandClient("super secret bot token", {}, {
    description: "Bot for the /r/NDShacks discord server",
    owner: "js8bit",
    prefix: "."
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.registerCommand("summon", "💁 ``// dsi guide`` 🎮 ``// cheat databases`` 💾 ``// threedeus`` 🔴 ``// subreddit`` 🔁 ``// go back``", {
    description: "The command you want to use",
    fullDescription: "It does pretty much everything, dsi guide, cheat database, etc",
    reactionButtons: [
        {
            emoji: "💁",
            type: "edit",
            response: ["https://dsi.cfw.guide"]
        },
        {
            emoji: "🎮",
            type: "edit",
            response: ["https://gbatemp.net/threads/deadskullzjrs-flashcart-cheat-databases.488711/"]
        },
        {
            emoji: "💾",
            type: "edit",
            response: ["https://github.com/jijipwn/threedeus/releases/latest"]
        },
        {
            emoji: "🔴",
            type: "edit",
            response: ["https://reddit.com/r/ndshacks"]
        },
        {
            emoji: "🔁",
            type: "edit",
            response: ["💁 ``// dsi guide`` 🎮 ``// cheat databases`` 💾 ``// threedeus`` 🔁 ``// go back``"]
        }
    ],
    reactionButtonTimeout: 60000
});

bot.connect();
