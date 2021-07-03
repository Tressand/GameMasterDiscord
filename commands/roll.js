module.exports = {
    name: `roll`,
    description: `Roll some dice...`,

    execute(message, args){
        const dices = args[0].split(/d+/)
        
        const diceNumber = dices[0];
        const maxNumber = dices[1];
        const results = [];

        for (let i = 0; i < diceNumber; i++) {
        results.push(Math.floor(Math.random() * maxNumber) + 1);
        }

        let stringResults = '';
        let totalResult = 0;

        results.map((result, index) => {
        if(index === results.length - 1){
            stringResults += `${result}`
        } else {
            stringResults += `${result}, `
        }
        totalResult += result
        });

        message.channel.send(`You rolled: ${stringResults}
That's ${totalResult} total.`);
    }
}

