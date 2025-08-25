let firstName = "Brooke";
let favoriteNumber = 8;
const likesCoding = true;

console.log(`Hi, my name is ${firstName}, my favorite number is ${favoriteNumber} and it is  ${likesCoding} that I like coding.`);

let birthYear = 1991;
let currentYear = 2025;
let age = currentYear - birthYear;

console.log(`I am either ${age} or ${age - 1} years old.`);

let foods = ["pizza", "burger", "tacos" ];
let student = {
    firstName: firstName,
    favoriteNumber: favoriteNumber,
    likesCoding: likesCoding,
    favoriteFoods: foods
};          
console.log("Student: " ,student);
console.log(`The student's favorite foods are ${student.favoriteFoods}.`);