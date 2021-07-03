module.exports = {
  name: `roll`,
  description: `Roll some dice...`,

  execute(message, args) {
    if (args.length === 0) {
      message.channel.send(
        `Try rolling some dice.
If you don\'t know how, just use "/help roll"!`
      );
    } else {
      let totalDices = [];

      for (arg of args) {
        const argArray = arg.split(/d+/); // 1d20 => [1, 20] | +5 => ['+5']

        if (argArray.length === 2) {
          argNumber = argArray.map((number) => Number(number));
          if (!argNumber[0]) {
            message.channel.send(
              `I couldn\'t read this "${arg}" part of your roll because it's somewhere wrong, i will skip it.
If you need to remember the syntax, use "/help roll"`
            );
          } else totalDices.push(argNumber);
        }
        if (argArray.length === 1) {
          let argElement = argArray[0];
          let prefix = argElement[0];
          let rest = argElement.slice(1);
          let modifier = Number(rest);

          if (!modifier) {
            message.channel.send(
              `I couldn\'t read this "${arg}" part of your roll because it's somewhere wrong, i will skip it.
If you need to remember the syntax, use "/help roll"`
            );
          }

          if (prefix === "+") {
            totalDices.push(modifier);
          }
          if (prefix === "-") {
            totalDices.push(modifier * -1);
          }
        }
        if (argArray.length > 2) {
          message.channel.send(
            `I can\'t read your roll because it's somewhere wrong.
If you need to remember the syntax, use "/help roll"`
          );
        }
      }

      let totalModifier = 0;
      let totalResult = 0;
      let diceResultString = "";

      for (roll of totalDices) {
        if (typeof roll === "object") {
          diceResultString += `${roll[0]}d${roll[1]}:`;
          for (let i = 0; i < roll[0]; i++) {
            let result = Math.floor(Math.random() * roll[1]) + 1;

            totalResult += result;

            if (!(i == roll[0] - 1)) diceResultString += ` ${result},`;
            else diceResultString += ` ${result}.\n`;
          }
        } else if (typeof roll === "number") {
          totalModifier += roll;
          totalResult += roll;
        }
      }

      if (totalModifier > 0) {
        totalModifier.toString();
        let aux;
        aux = "+" + totalModifier;
        totalModifier = aux;
      }

      if (diceResultString == "") diceResultString = "No dice at all!\n";

      message.reply(
        "You rolled:\n" +
          diceResultString +
          `With ${totalModifier} modifier.\n` +
          `\nThat\'s ${totalResult} total.`
      );
    }
  },
};
