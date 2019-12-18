const { Plugin } = require('powercord/entities');
const webpack = require('powercord/webpack');
const { getModule } = webpack;

module.exports = class VideoLink extends Plugin {
  async startPlugin () {
    const { getGuild } = await getModule([ 'getGuild' ]);
    const { getChannel } = await getModule([ 'getChannel' ]);
    this.registerCommand('videolink', [ 'vidlink' ], 'Generate a Video link for any Voice Channel ID.', '{c}',
      async (x) => {
        const channelID = `${x}`;
        const channel = getChannel(channelID);
        const guild = getGuild(channel.guild_id);
        if (guild.id) {
          return {
            send: false,
            result: (`https://canary.discordapp.com/channels/${guild.id}/${channelID}`)
          };
        }
        return {
          send: false,
          result: 'Link Generation Failed!'
        };
      }
    );
  }
};
