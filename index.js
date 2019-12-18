const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');


module.exports = class VideoLink extends Plugin {
  async startPlugin () {
    const guild = await getModule([ 'getGuild' ]);
    const getChannel = (await getModule([ 'getChannel' ]));
    const vc = (await getModule([ 'getVoiceChannelId' ]));
    this.registerCommand('videolink', [ 'vidlink' ], 'Generate a Video link for any Voice Channel ID.', '{c}',
      (x) => {
        const channelID = (x.length === 0) ? x[0] : vc();
        const channel = getChannel(channelID);
        const link = (channel.guild.id) ? `https://canary.discordapp.com/channels/${guild.id}/${channelID}`
          : 'Uh oh, something went wrong.';
        return {
          send: false,
          result: link
        }
      })
  }
};
