const secretNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;


function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const messageDiv = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageDiv.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    count++;
    

    if (guess < secretNumber) {
        messageDiv.textContent = `Too low!${count} attempts Try again.`;
    } else if (guess > secretNumber) {
        messageDiv.textContent = `Too high! ${count}Try again.`;
    } else {
        messageDiv.textContent = `Congratulations! You've guessed the number in ${count} attempts.`;
    }

    document.getElementById("guessInput").value = '';
    document.getElementById("guessInput").focus();
}
