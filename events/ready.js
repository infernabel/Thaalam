const config = require("../config.js");
const { ActivityType } = require("discord.js");
const fetch = require("node-fetch"); // Ensure 'node-fetch' is installed (for checking YouTube live status)

const streamUrl = "https://www.youtube.com/watch?v=YOUR_LIVE_STREAM_ID"; // Replace with your live stream URL

module.exports = async (client) => {
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v10");
    const rest = new REST({ version: "10" }).setToken(config.TOKEN || process.env.TOKEN);

    (async () => {
        try {
            await rest.put(Routes.applicationCommands(client.user.id), {
                body: client.commands.map(cmd => cmd.toJSON()),
            });
            console.log('\x1b[36m%s\x1b[0m', '| 🚀 Commands Loaded successfully!');
        } catch (err) {
            console.log('\x1b[31m%s\x1b[0m', '| ❌ Commands Failed To Load!', err);
        }
    })();

    console.log('\x1b[32m%s\x1b[0m', `| 🌼 Logged in as ${client.user.username}`);

    // Function to check if the YouTube stream is live
    async function checkStreamStatus() {
        try {
            const response = await fetch(`https://www.youtube.com/oembed?url=${streamUrl}&format=json`);
            return response.ok; // Returns true if stream is live, false otherwise
        } catch (error) {
            console.error("Error checking stream status:", error);
            return false;
        }
    }

    // Update bot status every 1 minute
    setInterval(async () => {
        const totalMembers = client.guilds.cache.reduce((total, guild) => total + guild.memberCount, 0);
        const totalServers = client.guilds.cache.size;

        const isLive = await checkStreamStatus();

        if (isLive) {
            client.user.setActivity(`Streaming ${totalMembers} & ${totalServers}`, {
                type: ActivityType.Streaming,
                url: streamUrl
            });
        } else {
            client.user.setActivity(`Playing with ${totalMembers} users in ${totalServers} servers`, {
                type: ActivityType.Playing
            });
        }
    }, 60000); // Checks every 1 minute

    client.errorLog = config.errorLog;
};
