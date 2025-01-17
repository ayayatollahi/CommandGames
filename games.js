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

// Retrieve the player's choice from the command line arguments and convert it to lowercase
const playerChoice = process.argv[2]?.toLowerCase();

// Validate the player's choice
if (!playerChoice || !["rock", "paper", "scissors"].includes(playerChoice)) {
  console.error("You should choose one of 'rock', 'paper', or 'scissors'."); // Display an error if the choice is invalid
  process.exit(1); // Exit the program with an error code
}

// Define the possible moves for the game
const moves = ["rock", "paper", "scissors"];

// Randomly generate the computer's choice
const computerChoice = moves[Math.floor(Math.random() * moves.length)];

// Initialize the result of the game
let result;

// Determine the outcome of the game
if (playerChoice === computerChoice) {
  result = "It's a draw!"; // The game is a tie if both choices are the same
} else if (
  (playerChoice === "rock" && computerChoice === "scissors") || // Rock beats scissors
  (playerChoice === "paper" && computerChoice === "rock") || // Paper beats rock
  (playerChoice === "scissors" && computerChoice === "paper") // Scissors beat paper
) {
  result = "You win!";
} else {
  result = "You lose!";
}

// Output the result to the console
console.log(
  `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result} ` // Provide a summary of the choices and the result
);
