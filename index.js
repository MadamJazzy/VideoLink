const {Plugin} = require("powercord/entities");
const webpack = require("powercord/webpack");

module.exports = class videolink extends Plugin {
    startPlugin() {
        this.registerCommand("videolink", [], "Video Link Generator", "{c} [channelID]", (args) => ({
            send: false,
            result: this.videolink(args)
        }));
    }

    videolink(channel) {
        let guild = channel.guild_id;
        let msg = ("https://canary.discordapp.com/channels/" + guild + "/" + channel);
        return msg;
    }
};

