const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');
const voice = getModule([ 'getVoiceChannelId' ]).getVoiceChannelId;

module.exports = class VideoLink extends Plugin {
  async startPlugin () {
    this.registerCommand('videolink', [], 'Video Chat Link Generator', '{c} [channel_ID]',
      async (input) => {
        const { getGuild } = await getModule([ 'getGuild' ]),
          { getChannel } = await getModule([ 'getChannel' ]),
          guild = getGuild((getChannel(`${input}`)).guild_id),
          link = (`https://canary.discordapp.com/channels/${guild.id}/${input}`);
        return {
          send: false,
          result: `${link}`
        };
      });
    /*
     * this.registerCommand('voicelink', [], 'Video link for the Channel you are currently in (voice)', '{C}'
     * async (ton) => {
     * const { getVoice } = await getModule([ 'getVoiceChannelId' ]).getVoiceChannelId
     * const
     */
  }
};
