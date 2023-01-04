'use strict';

// Functions 
// start with key word functions funciton name(){}

//function logger(){
//    console.log(`my name is Jonas`);
//}
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

//// calling, invoking or running a funciton

//logger();

/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//const appleOrangeJuice = fruitProcessor(2, 4);
//console.log(appleOrangeJuice);
*/
/*
//Function Declaration
function calcAge(birthyear) {
    return 2037 - birthyear;
}
const Age1 = calcAge(1982);
//console.log(Age1);

//Function Expression
const calcAge2 = function (birthyear) {
    return 2023 - birthyear;
}
const Age2 = calcAge2(1982);
console.log(Age1, Age2);
*/





//Arrow Function (We)
/*
const calcAge3 = birthyear => 2023 - birthyear;
const age3 = calcAge3(1982);
console.log(age3);


const yearsUntilRetirement = (birthyear, firstName)=>{
    
    const age = 2023 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1982, 'Jonas'));
console.log(yearsUntilRetirement(1995, 'Jane'));

*/
/*
const  cutPieces = function(fruits) {

    return fruits * 4;
}
function fruitProcessor(apples, oranges) {
    
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
};
console.log(fruitProcessor(2, 3));
*/




const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstName) {
    
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1982, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
