

/*
//fundamentals of arrays
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 1984, 2000, 2020);
console.log(friends[0]);

console.log(friends.length);
console.log([friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'schmedtmann', 2022 - 1982, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
*/

//Exercise

/*
const calcAge = function (birthYear) {
    
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge (years[0]), calcAge (years[1]),calcAge (years[years.length-1])]

console.log(ages);
*/


//Add Elements 
/*const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove Elements from any Array

friends.pop();
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);
console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
friends.push(23);
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    
    console.log('You do have a friend called Steven');
}
*/


//Objects  - Dot Vs Bracket Notation
/*
const jonas = {

    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age : 2037 - 1991,
    job: 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
}
console.log(jonas);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Joonas? Choose between firstName, lastName, age, job and friends');

//console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    
    console.log((jonas[interestedIn]));
} else {
    console.log ('Invalid request');
}

//Add New Properties to an Object.

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmdtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friends is called ${jonas.friends[0]}`);
*/
/*
const jonas = {

    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    
    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function (birthYear) {
    //    console.log(this);
    //    return 2037 - this.birthYear;
    //}
/*
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job} and he has ${this.hasDriversLicense? 'a' : 'no'} drivers license`
    }
};

   

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
*/


//Loops

// For loop Keeps running whild condition is true

//for (let rep = 1; rep <= 10; rep++){
    
//    console.log(`Lifting weights repetition ${rep}`);
//};

/*
for (let vote = 1; vote <= 50; vote++){
    
    console.log(`Voter number ${vote} is currently voting`);
}

*/


/*


const jonas = [

    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
]


const types = [];

for (let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);
    //Filliing an array method 1
    types[i] = typeof jonas[i];

    //Filliing an array method 1

    types.push(typeof jonas[i]);
};
console.log(types);
console.log(types);

const year = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < year.length; i++){

    ages.push(2037 - year[i]);
}

console.log(ages);


//continue and break

//Only String

for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] === 'number') break;
  
    console.log(jonas[i], typeof jonas[i]);
};

*/

//Looping Backwards
/*
const jonas = [

    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
]

for (let i = jonas.length - 1; i >=0; i--){
    console.log(jonas[i]);
}
*/
//Loop inside a loop


for (let exercise = 1; exercise < 4; exercise++){

    console.log(`------starting exercise ${exercise}-----`);

    for (let rep = 1; rep < 6; rep++){

        console.log(`${exercise}  Lifting Weight Repetition ${rep}`);
    }
};

