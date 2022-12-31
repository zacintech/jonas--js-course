/*

let js = "amazing";

//console.log(40 + 8 + 23 - 10);
      

console.log("Jonas");
//Variable naming convention
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "Jonas";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher"

//console.log(`${person} 
//${myFirstJob} 
//${myCurrentJob}`);

//Assignment 

let country = "Sri Lanka";
//let continent = "Asia";
let population = "20 Million";

//console.log(`${country}
//${continent}
//${population}`);

*/
// Data Types


/*
let javaScriptIsFun = true;

console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "yes";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);




console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

*/

/*
const country = "Sri Lanka";
const continent = "Asia";
//const population = "20 Million";
const isIsland = true;
const language = "English";
//const isIsland = true;

console.log(country);
console.log(continent);
console.log(isIsland);
console.log(language);
console.log(typeof isIsland);
*/

// Baisc Operators

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//2 ** 3 means = 2 to the power of 3 ( 2 * 2 * 2)

const firstName = "Jonas";
const lastName = "Brothers"
console.log(firstName + " " + lastName);
console.log(typeof lastName);


let x = 10 + 15;  //25
x += 10; // x = x + 10 = 35
x *= 4; // x = x * 4 = 140
x++;
x--;
x--;

console.log(x);


// Comparison Operator


console.log(ageJonas > ageSarah);
console.log(ageSarah >= 21);

const isFullAge = ageSarah >= 21;
console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x - y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "Jonas";
const job = "Prgorammer";
const birthyear = "1992";
const year = "2038";

const jonasNew = `I'm ${firstName},  
${year - birthyear}, 
year old
${job} !`

console.log(jonasNew);

console.log(`Just a regular string..`);
*/


/*
const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {

    console.log(`Eligible to drive 🚘`);
} else {
    const yearsLeft = 18 - age;  
    console.log(`Sarah does not meet the minimum age ${yearsLeft} years left to qualify to drive :)`);
}
*/

/*
const birthYear = 1991;
let century;

if (birthYear <= 2000 && birthYear >= 1900) {
    century = 20
} else {
    century = 21
}
console.log(century);
*/

//type conversion
/*
const inputYear = "1991";
console.log(Number(inputYear));


console.log(Number("Jonas"));
console.log(typeof Nan);
console.log(String(23), 23);

//type coercion

console.log(


);
*/
/*
const money = 100;
if (money) {

    console.log(`Dont spend it all`);   
} else {
    console.log(`You have to get a job`);
}


let height = 0;

if (height) {
    console.log(`Yay! Height is Defined`);   
} else {
    console.log(`Yay! Height is UnDefined`);
}
*/
/*
const age = 16;
if (age === 18) {
    console.log(`Congratulations in becoming an adult`);
} else {
    console.log(`You're a minor`);
}
//*/


/*
const favourite = Number (prompt(`Whats your favourite number`));
//console.log(favourite);
//console.log(typeof favourite);


if (favourite === 23) {
    console.log(`Great 23 is an amazing number`);
} else if (favourite === 7) {
    console.log(` 7 is also a cool number`);
}else if (favourite === 9) {
    console.log(` 9 is also a cool number`);
} else {
    console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !==23) {
    console.log(`Why not 23`);
}
*/


/*
const numNeighbours = prompt('how many neighbour countries does your country have');

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log( 'More than 1 border');   
} else {
    
    console.log(`No Border`);
}
*/

//const hasDriversLicense = true;
//const hasGoodVision = true;
//const isTired = false;

//console.log(hasDriversLicense || hasGoodVision);

//if (hasDriversLicense && hasGoodVision) {
//    console.log(`Sarah qualifies to drive`);
//} else {
//    console.log(`Sarah needs to wait for another 2 years`);
//}

//console.log(hasDriversLicense && hasGoodVision && isTired);

//if (hasDriversLicense && hasGoodVision && !isTired)  {
//    console.log(`Sarah qualifies to drive`);
//} else {
//    console.log(`Someone else should drive`);
//}


//let day = "mondays";

//if (day === "monday") {
//    console.log(`Plan course structure`);
//} else if (day === "tuesday") {
//    console.log(`Prepare Theory Videos`);
//} else if (day === "wednesday" || day === "thursday") {
//    console.log(`write code examples`);
//} else if (day === "friday") {
//    console.log(`Record Videos`);
//} else if (day === "saturday" || day === "sunday") {
//    console.log(`Enjoy the weekend`);
//} else {
//    console.log(`Not a valid day`);
//}

//if(23 > 30){
//    const str = "23 is Bigger"
//}
//console.log((str));

/*
const age = 17;


//age >= 18 ? console.log(`I like to drink wine`) :
//    console.log(`You are only allowed to drink non alcoholic beverage`); 

const drink = age >= 18 ? "wine" : 'water';
console.log(drink);

const drive = age >= 18 ? 'drive' : 'walk';
console.log(drive);

console.log(`I like to drink ${age >= 18 ? "wine" : 'water'}`);

*/

//const bill = 40;

//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
//console.log(tip);

//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);