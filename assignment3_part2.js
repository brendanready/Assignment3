/*
        Brendan Ready
        Assignment 3, Part 2
        FEWD 2
*/

// The Rock, Paper, Scissors Game
/*
// STEP 1

var userChoice = prompt("Please choose one of the following:\nRock, Paper, or Scissors.").toLowerCase();
console.log(userChoice);

// STEP 2

var compChoice = Math.random();
console.log(compChoice);

// STEP 3

var reset;

function Outcome() {
    if (compChoice > .6666) {
        reset = "rock";
    } else if (compChoice > 0.3333) {
        reset = "paper";
    } else if (compChoice > 0) {
        reset = "scissors";
    }
}
Outcome();
compChoice = reset;

console.log(compChoice);

// STEPS 4, 5, 6

function compare(userChoice, compChoice) {
    if (userChoice == "rock" && compChoice == "paper") {
        alert("You Lose!\n\n" + "You chose " + userChoice + " and the computer chose " + compChoice + ".");
    } else if (userChoice == "rock" && compChoice == "scissors") {
        alert("You Win!\n\n" + "You chose " + userChoice + " and the computer chose " + compChoice + ".");
    } else if (userChoice == "paper" && compChoice == "scissors") {
        alert("You Lose!\n\n" + "You chose " + userChoice + " and the computer chose " + compChoice + ".");
    } else if (userChoice == "paper" && compChoice == "rock") {
        alert("You Win!\n\n" + "You chose " + userChoice + " and the computer chose " + compChoice + ".");
    } else if (userChoice == "scissors" && compChoice == "rock") {
        alert("You Lose!\n\n" + "You chose " + userChoice + " and the computer chose " + compChoice + ".");
    } else if (userChoice == "scissors" && compChoice == "paper") {
        alert("You Win!\n\n" + "You chose " + userChoice + " and the computer chose " + compChoice + ".");
    } else if (userChoice == compChoice) {  // STEP 5: TIE
        alert("It's a tie!\n\n" + "You chose " + userChoice + " and the computer chose " + compChoice + ".\n\n" + "Choose again");
        userChoice = prompt("Please choose one of the following:\nRock, Paper, or Scissors.").toLowerCase();
        compChoice = Math.random();
        function Outcome() {
            if (compChoice > .6666) {
                reset = "rock";
            } else if (compChoice > 0.3333) {
                reset = "paper";
            } else if (compChoice > 0) {
                reset = "scissors";
            }
        }
        Outcome();
        compChoice = reset;
        compare(userChoice, compChoice);
    }
    else {  // STEP 6: USER DIDN'T ENTER ROCK, PAPER, or SCISSORS
        userChoice = prompt("You did not enter Rock, Paper, or Scissors.  Please choose one of the following:\nRock, Paper, or Scissors.").toLowerCase();
        compChoice = Math.random();
        function Outcome() {
            if (compChoice > .6666) {
                reset = "rock";
            } else if (compChoice > 0.3333) {
                reset = "paper";
            } else if (compChoice > 0) {
                reset = "scissors";
            }
        }
        Outcome();
        compChoice = reset;
        compare(userChoice, compChoice);
    }
}

compare(userChoice, compChoice);
*/

// The Basic Calculator
/*
// STEP 1 

var num1 = parseFloat(prompt("Please enter a number."));
console.log(num1);

// STEP 2

var num2 = parseFloat(prompt("Please enter a second number."));
console.log(num2);

// STEP 3

var operation = prompt("Please choose an operation you would like to perform: add, subtract, multiply, or divide").toLowerCase();
console.log(operation);

// STEPS 4, 5, 6, 7

function calculate(x, y, z) {   // STEP 4
    switch (operation) {    // STEP 6
        case "add":
            alert(num1 + num2);
            break;
        case "subtract":
            alert(num1 - num2);
            break;
        case "divide":
            alert(num1 / num2);
            break;
        case "multiply":
            alert(num1 * num2);
            break;
        default:    // STEP 7
            operation = prompt("You did not enter either add, subtract, multiply, or divide. Please enter one of the following: add, subtract, multiply, or divide");
            calculate(operation, num1, num2);
            break;
    }
}
calculate(operation, num1, num2);   // STEP 5
*/

// Death by JavaScript

// STEP 1
/*
var name = "webmaster";

function alphabetize(string) {
    nameSort = name.split("");
    nameSort = nameSort.sort().join("");
    return nameSort;
}

console.log(alphabetize(name));
*/

// STEP 2
/*
var phrase = "the quick brown fox";

function capitalize(string) {
    var phraseCap = string.replace(/\b\w/g, function(x) {
        return x.toUpperCase();
    });
    return phraseCap;
}

console.log(capitalize(phrase));
*/

// STEP 3
/*
var phrase = "The quick brown fox";

function countVowels(string) {
    return string.match(/[aeiou]/g).length;
}

console.log(countVowels(phrase));
*/

// STEP 4
/*
function generateStringId() {
    
    var string = [];
    
    for (var i = 0; i < 8; i++) {
        var rletter;
        var rnum;
        var rspecial;
        var rnum1 = Math.random();
        var rnum2 = Math.random();
        var letter = "abcdefghijklmnopqrstuvwxyz";
        var num = "0123456789";
        var special = "!#$%&*+-/<=>?@[\]^_{}~";


        if (rnum1 < 0.333) {
            rletter = Math.floor(Math.random() * letter.length);
            letter = letter.charAt(rletter);
                if (rnum2 > 0.5) {
                   letter = letter.toUpperCase();
                }
            string.push(letter);
        } else if (rnum1 >= 0.333 && rnum1 < 0.666) {
            rnum = Math.floor(Math.random() * num.length);
            num = num.charAt(rnum);
            string.push(num);
        } else if (rnum1 >= 0.666) {
            rspecial = Math.floor(Math.random() * special.length);
            special = special.charAt(rspecial);
            string.push(special);
        }
    };
    string = string.join("");
    return string;
}

console.log(generateStringId());
*/

// STEP 5
/*
var countryNames = ["Australia", "Germany", "United States of America"];

function Longest_Country_Name(array) {
    var nameLength = 0;
    var longestName;

    for (var i = 0; i < array.length; i++) {
		if (array[i].length > nameLength) {
			nameLength = array[i].length;
			longestName = array[i];
		};
    }

    return longestName;
}

console.log(Longest_Country_Name(countryNames));
*/