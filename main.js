var inquirer = require('inquirer');
var fields = {
    0: {
        number: 0,
        color: "Green",
    },
    1: {
        number: 26,
        color: "Black",
    },
    2: {
        number: 3,
        color: "Red",
    },
    3: {
        number: 35,
        color: "Black",
    },
    4: {
        number: 12,
        color: "Red",
    },
    5: {
        number: 28,
        color: "Black",
    },
    6: {
        number: 7,
        color: "Red",
    },
    7: {
        number: 29,
        color: "Black",
    },
    8: {
        number: 18,
        color: "Red",
    },
    9: {
        number: 22,
        color: "Black",
    },
    10: {
        number: 9,
        color: "Red",
    },
    11: {
        number: 31,
        color: "Black",
    },
    12: {
        number: 14,
        color: "Red",
    },
    13: {
        number: 20,
        color: "Black",
    },
    14: {
        number: 1,
        color: "Red",
    },
    15: {
        number: 33,
        color: "Black",
    },
    16: {
        number: 16,
        color: "Red",
    },
    17: {
        number: 24,
        color: "Black",
    },
    18: {
        number: 5,
        color: "Red",
    },
    19: {
        number: 10,
        color: "Black",
    },
    20: {
        number: 23,
        color: "Red",
    },
    21: {
        number: 8,
        color: "Black",
    },
    22: {
        number: 30,
        color: "Red",
    },
    23: {
        number: 11,
        color: "Black",
    },
    24: {
        number: 36,
        color: "Red",
    },
    25: {
        number: 13,
        color: "Black",
    },
    26: {
        number: 27,
        color: "Red",
    },
    27: {
        number: 6,
        color: "Black",
    },
    28: {
        number: 34,
        color: "Red",
    },
    29: {
        number: 17,
        color: "Black",
    },
    30: {
        number: 25,
        color: "Red",
    },
    31: {
        number: 2,
        color: "Black",
    },
    32: {
        number: 21,
        color: "Red",
    },
    33: {
        number: 4,
        color: "Black",
    },
    34: {
        number: 19,
        color: "Red",
    },
    35: {
        number: 15,
        color: "Black",
    },
    36: {
        number: 32,
        color: "Red",
    },
};
var questionsGame = [
    {
        type: 'input',
        name: 'startAmount',
        message: 'Starting amount: ',
        default: 100
    },
    {
        type: 'input',
        name: 'startBet',
        message: 'Starting bet: ',
        default: 1
    },
    {
        type: 'list',
        name: 'chosenColor',
        message: 'Which color do you want to use?',
        choices: [
            'Red',
            'Black'
        ],
        default: 0
    }
];
function gameFunction() {
    inquirer
        .prompt(questionsGame)
        .then(function (answers) {
        var amount = parseInt(answers.startAmount);
        var startingAmount = parseInt(answers.startAmount);
        var startingBet = parseInt(answers.startBet);
        var chosenColor = answers.chosenColor;
        var amountOfTries = 0;
        var currentBet = startingBet;
        while (amount > 0) {
            if (amount === (startingAmount + startingBet))
                break;
            if (amount < currentBet)
                break;
            amountOfTries++;
            amount -= currentBet;
            currentBet *= 2;
            var random = randomNumber(37);
            var result = fields[random];
            if (result.color === chosenColor) {
                amount += currentBet;
                break;
            }
            else {
                console.log(amountOfTries + ". Didn't hit " + chosenColor + " (hit " + result.color + " with the number " + result.number + ") and lost " + currentBet + " (total is now " + amount + ")");
            }
        }
        if (amount === (startingAmount + startingBet)) {
            console.log("You won at attempt nr. " + amountOfTries + " and have a total of " + amount + ", quit right now");
        }
        else if (amount < startingAmount) {
            console.log("You lost and cant get your bettings backs.");
        }
    });
}
function randomNumber(max) {
    return Math.floor(Math.random() * (max));
}
gameFunction();
