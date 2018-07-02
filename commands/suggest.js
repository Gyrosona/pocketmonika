const Discord = require('discord.js');
const dev = ('Gorosona#8350');
exports.run = async (client, message, args) => {
  message.delete()
  let suggestion = args.join(' ');
    if (!suggestion) return message.reply('Please provide a suggestion.');
    let channel = client.channels.get('415087527259668482');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .addField(`Suggestion from ${message.guild.name}`,`${suggestion}`)
    .setTimestamp()
    .setColor('#7289da')
    .setThumbnail(message.author.avatarURL)
    .setFooter(dev,'https://images-ext-2.discordapp.net/external/bKAJzT36ucvW-lJlN1VKdg7eaFrNJq62261cCeQq4Z8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/151754192690610176/1130ea0c0af7129d598fda0ac6c565e4.png')
    message.channel.send('Thank you for the suggestion.').then(m => m.delete(10000));
    return channel.send("A wild suggestion appeared!",embed);
  console.log(`${message.author.tag} created a new suggestion: ${suggestion}`)
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'suggest',
  description: '',
  usages: 'suggest <description>'
};