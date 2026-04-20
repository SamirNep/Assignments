function runAssignment4() {
    const secret = Math.floor(Math.random() * 10) + 1;
    let guess = null;
    alert("I am thinking of a number between 1 and 10.");
    while (guess !== secret) {
        let input = prompt("Your guess:");
        if (input === null) {
            alert("Game cancelled.");
            return;
        }
        guess = Number(input);
        if (guess < secret) alert("Too low!");
        else if (guess > secret) alert("Too high!");
        else alert("Correct!");
    }
}