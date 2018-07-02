exports.run = async (client, message, args) => {
  if (!message.author.hasPermission('MANAGE_SERVER')) return message.channel.send("You can't do that, silly! What do you think I am, a peasant?").then(message.delete).then(m => m.delete(10000));
  if (!args[0]) return message.channel.send("You're supposed to give me an Image URL to change into, dummy!").then(message.delete).then(m => m.delete(10000));
  client.user.setAvatar(`${args[0]}`)
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['botavatar']
};
exports.help = {
  name: 'setavatar',
  description: '',
  usages: 'setavatar <imageurl>'
};