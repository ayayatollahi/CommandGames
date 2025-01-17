//console.log(process.argv);
//console.log(args);
/*
const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Please provide exactly two numbers");
  return;
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Both arguments must be numbers");
  return;
}

const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is: ${sum}.`);
*/

/*const rock = "Rock"
const paper = "Paper"
const scissor = "Scissor"*/

const playerChoice = process.argv[2]?.toLowerCase();

if (!playerChoice || !["rock", "paper", "scissors"].includes(playerChoice)) {
  console.error("You should choose one of 'rock', 'paper', or 'scissors'.");
  process.exit(1);
}

const moves = ["rock", "paper", "scissors"];
const computerChoice = moves[Math.floor(Math.random() * moves.length)];

let result;
if (playerChoice === computerChoice) {
  result = "It's a draw!";
} else if (
  (playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")
) {
  result = "You win!";
} else {
  result = "You lose!";
}

console.log(
  `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result} `
);
