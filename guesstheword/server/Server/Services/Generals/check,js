// Predefined secret word
const secretWord = "apple";

// Maximum number of attempts
const maxAttempts = 6;

// Variable to store the current attempt count
let attempts = 0;

// Function to check the user's guess against the secret word
function checkGuess(userGuess) {
  // Increment the attempt count
  attempts++;

  // Check if the user's guess is correct
  if (userGuess === secretWord) {
    console.log(`Congratulations! You guessed the word "${secretWord}" in ${attempts} attempts.`);
    // You can perform additional actions here if the guess is correct
  } else {
    // Provide feedback on the guess
    const feedbackArray = generateFeedback(userGuess);
    console.log(`Attempt ${attempts}: ${feedbackArray}`);
    
    // Check if the maximum number of attempts has been reached
    if (attempts === maxAttempts) {
      console.log(`Sorry, you've reached the maximum number of attempts. The correct word was "${secretWord}".`);
      // You can perform additional actions here if the maximum attempts are reached
    }
  }
}

// Function to generate feedback based on the user's guess
function generateFeedback(userWord) {
    const feedbackArray = [];
    for (let i = 0; i < secretWord.length; i++) {
        if (userWord[i] === secretWord[i]) {
            feedbackArray.push("green");
        } else if (secretWord.includes(userWord[i])) {
            feedbackArray.push("yellow");
        } else {
            feedbackArray.push("gray");
        }
    }
    return feedbackArray;
}

// Example usage:
const userGuess1 = "apricot";
checkGuess(userGuess1);

const userGuess2 = "banana";
checkGuess(userGuess2);

// Continue checking guesses until the correct word is guessed or max attempts are reached.
