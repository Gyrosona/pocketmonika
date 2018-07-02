//Call Packages
const Discord = require('discord.js');
const economy = require('quick.db');
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
//Define Discord Client
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = new Enmap({ provider: new EnmapLevel({ name: 'Database' }) });
//Define Config
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Command Loader / Handler
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) {
      console.log('No commands to load!');
      return;
    }
  jsfiles.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name , props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log(`[Commands] Loaded a total amount of ${files.length} commands`);
});

// Event loader / Handler
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  const jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) {
      return console.log(`[Events] No events could be loaded`);
  } else {
    console.log(`[Events] Loaded a total amount of ${jsfiles.length} Events`);
  }
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.password = 'dokidokimoddingclub'
client.login(process.env.TOKEN);