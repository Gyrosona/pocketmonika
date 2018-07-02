const Visualist = 391808780423397377;
const Writer = 382078965281718272;
const Musician = 382402008553881600;
const DevHelper = 440693341735092266;
const Observer = 376697695613485066;
exports.run = async (client, message, args) => {
  if (args[0] === 'Visualist') {
    if(message.member.roles.has(Visualist)) return undefined;
    message.author.removeRole(Visualist).catch(console.error);
  } else if (args[0] === 'Writer') {
    if(message.member.roles.has(Writer)) return undefined;
    message.author.removeRole(Writer).catch(console.error);
  } else if (args[0] === 'Musician') {
    if(message.member.roles.has(Musician)) return undefined;
    message.author.removeRole(Musician).catch(console.error);
  } else if (args[0] === 'DevHelper') {
    if(message.member.roles.has(DevHelper)) return undefined;
    message.author.removeRole(DevHelper).catch(console.error);
  } else if (args[0] === 'Observer') {
    if(message.member.roles.has(Observer)) return undefined;
    message.author.removeRole(Observer).catch(console.error);
  }
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'iamnot',
  description: '',
  usages: 'iamnot <role>'
};