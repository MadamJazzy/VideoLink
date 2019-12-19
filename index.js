const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');

module.exports = class VideoLink extends Plugin {
  async startPlugin () {
    const
      { getChannel } = getModule([ 'getChannel' ], false),
      { getVoiceChannelId } = getModule([ 'getVoiceChannelId' ], false);
    this.registerCommand('videolink', [ 'vidlink' ], 'Video Chat Link Generator', '{c} [channel_ID]',
      args => {
        const channelID = args.length > 0 ? args[0] : getVoiceChannelId();
        if (!channelID) {
          return {
            send: false,
            result: 'Do I look clairvoyant to you? It seems you are not in a VC and you did not tell me a channel ID'
          };
        }
        const channel = getChannel(channelID);
        // eslint-disable-next-line multiline-ternary
        const link = channel ? `https://discordapp.com/channels/${channel.guild_id}/${channelID}`
          : `Oops, I wasn't able to find a channel with the id \`${channelID}\`.\nMake sure you provide a valid channel id!`;
        return {
          send: false,
          result: link
        };
      });
  }
};
