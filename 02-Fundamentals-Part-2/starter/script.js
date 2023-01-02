'use strict';

// Functions 
// start with key word functions funciton name(){}

//function logger(){
//    console.log(`my name is Jonas`);
//}


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

const calcAge3 = birthyear => 2023 - birthyear;
const age3 = calcAge3(1982);
console.log(age3);


const yearsUntilRetirement = (birthyear, firstName)=>{
    
    const age = 2023 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1982, 'Jonas'));
console.log(yearsUntilRetirement(1995, 'Angelina'));





