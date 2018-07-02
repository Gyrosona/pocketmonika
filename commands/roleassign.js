exports.run = async (client, message, args) => {
  const mc = message.author.username;
  var PMQuotes = [
  `Oh! You need a role? Here you go~`,
  `Here you go, ${mc}! One freshly coded role to-go!`,
  `Good choice, that's definitely a good role to go for! Did you get the role yet?`,
  `Thanks for waiting, ${mc}! I can wait forever though, don't worry~`,
  `Welcome to the community! Enjoy, ${mc}!`
];
var quote = PMQuotes[Math.floor(Math.random() * PMQuotes.length)];
const gRole_V = 'Visualist'
const gRole_W = 'Writer'
const gRole_M = 'Musician'
const gRole_DH = 'DevHelper'
const gRole_O = 'Observer'
const gRole_MOD = 'Moderator'
const gRole_ADMIN = 'Admin'
const gRole_V2 = (message.guild.roles.find(`name`, 'Visualist'))
const gRole_W2 = (message.guild.roles.find(`name`, 'Writer'))
const gRole_M2 = (message.guild.roles.find(`name`, 'Musician'))
const gRole_DH2 = (message.guild.roles.find(`name`, 'DevHelper'))
const gRole_O2 = (message.guild.roles.find(`name`, 'Observer'))
  if (!args[0]) return message.channel.send("You have to give me the role's name, silly.").then(message.delete).then(m => m.delete(10000));
  if (args[0] === 'Visualist') {
    if(message.member.roles.has(gRole_V)) return;
    message.channel.send(quote,"\n`+` **Visualist** Role").then(message.delete(50)).then(m => m.delete(10000));
    message.author.addRole(gRole_V2).catch(console.error);
  } else if (args[0] === 'Writer') {
    if(message.member.roles.has(gRole_W)) return;
    message.channel.send(quote,"\n`+` **Writer** Role").then(message.delete(50)).then(m => m.delete(10000));
    message.author.addRole(gRole_W2).catch(console.error);
  } else if (args[0] === 'Musician') {
    if(message.member.roles.has(gRole_M)) return;
    message.channel.send(quote,"\n`+` **Musician** Role").then(message.delete(50)).then(m => m.delete(10000));
    message.guild.member.addRole(gRole_M2).catch(console.error);
  } else if (args[0] === 'DevHelper') {
    if(message.member.roles.has(gRole_DH)) return
    message.channel.send(quote,"\n`+` **DevHelper** Role").then(message.delete(50)).then(m => m.delete(10000));
    message.author.addRole(gRole_DH2).catch(console.error);
  } else if (args[0] === 'Observer') {
    if(message.member.roles.has(gRole_O)) return;
    message.channel.send(quote,"\n`+` **Observer** Role").then(message.delete(50)).then(m => m.delete(10000));
    message.author.addRole(gRole_O2).catch(console.error);
  } else if (args[0] === 'Moderator') {
    if(message.member.roles.has(gRole_MOD)) return;
    message.channel.send(quote,"\n`+` ~~**Moderator** Role~~").then(message.delete(50)).then(m => m.delete(500));
    message.channel.send("Did you really think I'd just give you the Moderator role? You must be insane to think I'd just give it to you for free. You have to earn your position! Not assign it to yourself.").then(message.delete).then(m => m.delete(5000));
      } else if (args[0] === 'Moderator') {
    if(message.member.roles.has(gRole_ADMIN)) return;
    message.channel.send(quote,"\n`+` ~~**Admin** Role~~").then(message.delete(50)).then(m => m.delete(500));
    message.channel.send("Have you lost your mind? If I gave you the Admin role, I'd be killed on the spot!").then(message.delete).then(m => m.delete(5000));
  } else {
    message.channel.send(`Wait, what's ${args[0]}...? Are you sure you wrote it correctly?`).then(message.delete(50)).then(m => m.delete(5000));
    }
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'iam',
  description: '',
  usages: 'iam <role>'
};