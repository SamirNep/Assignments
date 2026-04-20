function runAssignment2() {
    while (true) {
        let inches = parseFloat(prompt("Enter number in inches:"));

        if (inches < 0) {
            alert("Program stopped.");
            break;
        }

        let centimeters = inches * 2.54;
        alert(`${inches} inches = ${centimeters} centimeters`);
    }
}