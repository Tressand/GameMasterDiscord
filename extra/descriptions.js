const descriptions = {
  help: `Oh... That\'s redundant.
"help" command shows you some info about this bot and it\'s commands.
If you use add the name of other command after the help command it will show you what it does and how to use it. `,
  roll: `Let\'s roll some dice!
You can roll any quantity of dice or add any modifier to the rolls.

"/roll [Number of dices]d[Dice total faces]" will make that roll:
So "/roll 1d20" will roll 1 dice of 20 faces. Feel free to change the values of any dice.

"/roll ... +5 -3" will add 5 and substract 3 from the rolls.
Modifiers must have the prefixes "+" or "-".

Dices and Modifiers can be in any order, so:
"/roll 1d20 +3 -4 3d6 3d30 1d20" will be rolled correctly.

Also, if some parameter does not have the correct form, it will be ignored but still make the roll with the rest of the parameters:
"/roll 1d20 +3 -4 kekw xD" will roll 1d20 plus 3, so you can keep trolling.`,
};

export default descriptions;
