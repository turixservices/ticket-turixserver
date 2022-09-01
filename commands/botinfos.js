const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Gives the credits of the bot.'),
  async execute(interaction, client) {
    const embed = new client.discord.MessageEmbed()
      .setColor('6d6ee8')
      .setDescription('Developed with the 💜 by `harryhoyle#2224`\n\n[`Github`](https://github.com/turixservices) | [`Instagram`](https://www.instagram.com/harry._.hyole ) | [`Discord`](https://discord.gg/4uDQW9k87f) ')
      .setFooter(client.user.tag, client.user.avatarURL())
      .setTimestamp();
    await interaction.reply({
      embeds: [embed]
    });
  },
};