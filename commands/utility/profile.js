const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Exibe o perfil do usuário.")
    .addUserOption((option) =>
      option
        .setName("membro")
        .setDescription("O membro cujo ID você deseja resgatar.")
        .setRequired(false)
    ),
  async execute(interaction) {
    const member = interaction.options.getMember("membro");
    if (!member) {
      return interaction.reply("Membro inválido ou não encontrado.");
    }

    return interaction.reply(
      `O ID do membro ${member.user.tag} é: ${member.id}`
    );
  },
};
