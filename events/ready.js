const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Pronto! Logado(a) como ${client.user.tag}`);
  },
};
