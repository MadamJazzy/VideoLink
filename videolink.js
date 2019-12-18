const { Plugin } = require("powercord/entities")

module.exports = class Vidlink extends Plugin {
  startPlugin() {this.registerCommand("vidlink", [], "Video Link Generator", "{c} [channelID]", (args) => ({send: false, result: this.vidlink(args)})); }
  
  vidlink(args) {
	  
	  let guildID = channel.guild_id;
	  let channelID = input
	  let msg = "https://canary.discordapp.com/channels${guildID !== null ? `/${guildID}` : /${channelID}"
	  return msg
	  }
	  