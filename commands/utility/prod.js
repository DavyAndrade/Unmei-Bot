const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("prod")
    .setDescription("Roll de Prodígio"),
    
  async execute(interaction) {
    result = (parseInt(Math.random() * 20)) + 1;


    if (result == 1 || result == 20) {
      await interaction.reply("Parabéns! Você é um prodígio!");
    }
    else {
      await interaction.reply("Infelizmente parece que você não é um prodígio...");
    }
  },
};