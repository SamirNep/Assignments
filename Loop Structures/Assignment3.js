function runAssignment3() {
    let numbers = [];

    while (true) {
        let userInput = prompt("Enter a number (leave blank to stop):");

        if (userInput === "") {
            break;
        }
    }

    if (numbers.length > 0) {
        let smallest = Math.min(...numbers);
        let largest = Math.max(...numbers);
        alert(`Smallest number: ${smallest}\nLargest number: ${largest}`);
    }
}