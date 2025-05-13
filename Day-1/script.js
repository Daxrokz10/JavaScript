class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        // Select an element to display the greeting
        const output = document.getElementById("output");
        output.innerHTML = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

let heading = document.getElementsByClassName("heading");

heading[0].innerHTML = "<h1>Welcome to the JavaScript Class</h1>";

const person1 = new Person("Daksh", 18);

document.getElementById("greet-btn").addEventListener("click", function () {
    person1.greet();
});

let message = prompt("Enter a message:");

document.getElementById("message").innerHTML = message;
let h1 = document.createElement("h1");
h1.innerText = message;
document.body.appendChild(h1);