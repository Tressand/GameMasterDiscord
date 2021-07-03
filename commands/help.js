const descriptions = require("../extra/descriptions.js");

module.exports = {
  name: `help`,
  description: descriptions.help,

  execute(message, args) {
    if (args.length === 0) {
      const allKeys = message.client.commands.keyArray();
      let allKeysString = "";

      allKeys.map((key, index) => {
        if (index === allKeys.length - 1) {
          allKeysString += `${key}`;
        } else {
          allKeysString += `${key}, `;
        }
      });

      message.channel
        .send(`I'm here to provide some tools for your virtual roleplay games, feel free to feedback whenever you want. ;)

This are all my commands: ${allKeysString}.
If you want to learn more about an specific one just type "/help + command"`);
    } else if (args.length === 1) {
      const { description } = message.client.commands.get(args[0]);
      message.channel.send(description);
    } else {
      message.reply(
        "I can only help you with one command at the same time, please start from one to time"
      );
    }
  },
};
