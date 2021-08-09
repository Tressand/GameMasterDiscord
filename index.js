const Discord = require(`discord.js`);

const client = new Discord.Client();
const prefix = `/`;

const fs = require(`fs`);
require("dotenv").config();

client.commands = new Discord.Collection();

const commandfiles = fs
  .readdirSync(`./commands/`)
  .filter((file) => file.endsWith(`.js`));

for (const file of commandfiles) {
  const command = require(`./commands/${file}`);
  console.log(command.name);
  client.commands.set(command.name, command);
}

client.once(`ready`, () => {
  console.log(`Client ready`);
});

client.on(`message`, (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "help":
      client.commands.get(`help`).execute(message, args);
      break;

    case "roll":
      client.commands.get(`roll`).execute(message, args);
      break;
  }
});
client.login(process.env.DISCORD_CLIENT_AUTH);
