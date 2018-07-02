exports.run = async (client, message, args) => {
  message.channel.send(`Pong! **\`${Math.round(client.ping)}ms\`**`).then(m => m.delete).then(message.delete(10000));
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'ping',
  description: '',
  usages: 'ping'
};