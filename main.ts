const inquirer = require('inquirer');
const fields = {
    0: {
        number: 0,
        color: "green",
    },
    1: {
        number: 26,
        color: "black",
    },
    2: {
        number: 3,
        color: "red",
    },
    3: {
        number: 35,
        color: "black",
    },
    4: {
        number: 12,
        color: "red",
    },
    5: {
        number: 28,
        color: "black",
    },
    6: {
        number: 7,
        color: "red",
    },
    7: {
        number: 29,
        color: "black",
    },
    8: {
        number: 18,
        color: "red",
    },
    9: {
        number: 22,
        color: "black",
    },
    10: {
        number: 9,
        color: "red",
    },
    11: {
        number: 31,
        color: "black",
    },
    12: {
        number: 14,
        color: "red",
    },
    13: {
        number: 20,
        color: "black",
    },
    14: {
        number: 1,
        color: "red",
    },
    15: {
        number: 33,
        color: "black",
    },
    16: {
        number: 16,
        color: "red",
    },
    17: {
        number: 24,
        color: "black",
    },
    18: {
        number: 5,
        color: "red",
    },
    19: {
        number: 10,
        color: "black",
    },
    20: {
        number: 23,
        color: "red",
    },
    21: {
        number: 8,
        color: "black",
    },
    22: {
        number: 30,
        color: "red",
    },
    23: {
        number: 11,
        color: "black",
    },
    24: {
        number: 36,
        color: "red",
    },
    25: {
        number: 13,
        color: "black",
    },
    26: {
        number: 27,
        color: "red",
    },
    27: {
        number: 6,
        color: "black",
    },
    28: {
        number: 34,
        color: "red",
    },
    29: {
        number: 17,
        color: "black",
    },
    30: {
        number: 25,
        color: "red",
    },
    31: {
        number: 2,
        color: "black",
    },
    32: {
        number: 21,
        color: "red",
    },
    33: {
        number: 4,
        color: "black",
    },
    34: {
        number: 19,
        color: "red",
    },
    35: {
        number: 15,
        color: "black",
    },
    36: {
        number: 32,
        color: "red",
    },}

const question = [
    {
        type: 'input',
        name: 'startAmount',
        message: 'Starting amount: ',
        default: 1000
    },
    {
        type: 'input',
        name: 'startBet',
        message: 'Starting bet: ',
        default: 1
    }
]

inquirer
    .prompt(question)
    .then((answers) => {
        let amount = parseInt(answers.startAmount);
        const bet = parseInt(answers.startBet);
        let currentBet = bet;
        console.log(amount)
        while (amount > 0) {
            console.log({amount, startBet: bet})
            amount -= bet;
        }
    })


function (max): number {
    return Math.floor(Math.random() * max);
}

