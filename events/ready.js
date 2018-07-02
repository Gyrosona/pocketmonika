const prefix = (process.env.PREFIX);
exports.run = async (client) => {
  client.user.setActivity(`over Doki Doki Modding Club (${prefix}help)`, { type: 'WATCHING'});
  client.user.setStatus("invisible")
  console.log('RUNNING')
};