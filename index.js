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
        this.registerCommand(
            "videolink",
            ["vidlink"],
            "Generate a Video link for any Voice Channel ID.",
            "{c}",
            //code
            async(input) => {
                let channelID = Number(input);
                const channel = getChannel(channelID);
                if (channel.guild_id) {
                    const guild = getGuild(channel.guild_id);
                    return {
                        send: false,
                        result: ('https://canary.discordapp.com/' + guild + "/" + channelID)
                    }
                } else { // no guild_id, so channel must be DM
                    return {
                        send: false,
                        result: "Oops, Something isn't quite right, I was not able to find that Channel ID or you don't " +
                            "have permissions to access that channel!"
                    }
                }
            }
        )
    }
};
