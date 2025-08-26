//TASK 1
function sayHello() {
    console.log("Hello from Node.js!");
}
//sayHello();

//TASK 2
function welcomeUser(name) {
    console.log(`Welcome, ${name}!`);
}
//welcomeUser("Brooke");
//welcomeUser("Alice");

//TASK 3
function subtract(a,b){
    console.log(a - b);
}
//subtract(10,3);

//TASK 4
function square(number){
    return number * number;
}
let result = square(5);
//console.log(result);  

//TASK 5
function profile(name,age,likesCoding){
    return `Hi, I'm ${name}, I'm ${age} years old and it is ${likesCoding} that I like coding.`;
}
//console.log(profile("Brooke", 34, true));

//TASK 6
function greetWithTime(name, timeOfDay){
    return `Good ${timeOfDay? "morning":""}, ${name}!`;
}
//console.log(greetWithTime("Brooke", true));
//console.log(greetWithTime("Brooke", false));

//TASK 7
function calculator(a,b,operator){
    switch(operator){
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return "Invalid operator";
    }
}//END OF CALCULATOR FUNCTION

/*console.log(calculator(4,2,"add"));
console.log(calculator(4,2,"subtract")); 
console.log(calculator(4,2,"multiply"));
console.log(calculator(4,2,"divide"));  */

//TASK 8
let number= 4;
myFunction = (number)=> number * number;
result = myFunction(5);
//console.log(result);

//TASK 9
function isAdult(age){

    return age >= 18? true : false;
}
//PROFILE FUNCTION
function profile(name,age,likesCoding){
    let adultStatus = isAdult(age);

    return `
    Hi, I'm ${name}.
    I'm ${age} years old and ${adultStatus? "I am an adult": "I am not an adult"}.
    It is ${likesCoding} that I like coding.`;
}

console.log(profile("Brooke", 34, true));
console.log(profile("Brooke", 12, false));
console.log(profile("Brooke", 18, false));