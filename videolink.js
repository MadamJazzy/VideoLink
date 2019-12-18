const {Plugin} = require("powercord/entities");

module.exports = class videolink extends Plugin {
    startPlugin() {
        this.registerCommand("videolink", [], "Video Link Generator", "{c} [channelID]", (args) => ({
            send: false,
            result: this.videolink(args)
        }));
    }

    videolink(args) {
        let channelID = input;
        let guildID = channelID.guild_id;
		let msg = "https://canary.discordapp.com/channels${guildID !== null ? `/${guildID}` : /${channelID}" ;
        return msg
    }