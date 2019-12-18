const {Plugin} = require("powercord/entities");
const webpack = require("powercord/webpack");
const {getModule} = webpack;

module.exports = class VideoLink extends Plugin {
    constructor() {
        super()
    }

    async startPlugin() {
        const getGuild = (await getModule(["getGuild"])).getGuild;
        const getChannel = (await getModule(["getChannel"])).getChannel;
        const VC = (await getModule(["getVoiceChannelId"])).getVoiceChannelId;
        var channelID = '';
        this.registerCommand(
            "videolink",
            ["vidlink"],
            "Generate a Video link for any Voice Channel ID.",
            "{c}",
            //code
            async(x) => {
                const channelID = (x === null) ? channelID = `${VC()}` : channelID = `${input}`;
                const channel = getChannel(channelID);
                const link = (channel.guild.id) ? ('https://canary.discordapp.com/channels/' + guild.id + "/" + channelID)
                    : "Oops, Something isn't quite right, I was not able to find that Channel ID or you don't " +
                    "have permissions to access that channel!";
                return {send: false, result: link}
                    }
        )
    }
};
