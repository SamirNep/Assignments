function runAssignment3() {
    let numbers = [];

    while (true) {
        let userInput = prompt("Enter a number (or leave blank to stop):");

        if (userInput === "") {
            break;
        }

        let num = parseFloat(userInput);
        if (isNaN(num)) {
            alert("Invalid input. Please enter a numeric value.");
        } else {
            numbers.push(num);
        }
    }

    if (numbers.length > 0) {
        let smallest = Math.min(...numbers);
        let largest = Math.max(...numbers);
        alert(`Smallest number: ${smallest}\nLargest number: ${largest}`);
    } else {
        alert("No valid numbers were entered.");
    }
}