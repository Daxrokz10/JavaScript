let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));

let choice = parseInt(prompt("Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));
switch (choice) {
    case 1:
        alert(`The result of addition is: ${a + b}`);
        break;
    case 2:
        alert(`The result of subtraction is: ${a - b}`);
        break;
    case 3:
        alert(`The result of multiplication is: ${a * b}`);
        break;
    case 4:
        if (b !== 0) {
            alert(`The result of division is: ${a / b}`);
        } else {
            alert("Division by zero is not allowed.");
        }
        break;
    default:
        alert("Invalid choice. Please select a valid operation.");
}