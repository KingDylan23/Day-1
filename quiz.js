Javascript
let name = prompt("Hi! What's your name?");
let age = prompt("Nice to meet you, "+ name + "!How old are you?");
age = parseInt(age); // convert input from string to number

if (age >= 18) {
    alert("Hey" + name + "! You're an adult.Welcome!");
} 
else if (age >= 13) {
    alert("Hey " + name + "! You're a teenager.Stay curious and keep learning!");
}
else{
    alert("Hey " + name + "! You're still a young champ. Keep growing!");
}
