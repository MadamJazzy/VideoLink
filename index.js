const {Plugin} = require("powercord/entities");
const webpack = require("powercord/webpack");
const {getModule} = webpack;

module.exports = class videolink extends Plugin {
    startPlugin() {
        this.registerCommand("videolink", [], "Video Link Generator", "{c} [channelID]", (args) => ({
            send: false,
            result: this.videolink(args)
        }));
    }

    async videolink(channel) {
        const getGuild = (await getModule(["getGuild"])).getGuild;
        let guild = getGuild(channel.guild_id);
        let msg = ("https://canary.discordapp.com/channels/" + guild + "/" + channel);
        return msg;
    }
};