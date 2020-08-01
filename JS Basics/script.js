console.log('Hello World!');

/***** 
 * Variable Mutation and Type Coercion 
 * *****/
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);

var lastName = prompt('What is his lastname?');
console.log(firstName + ' ' + lastName);

/*********
 * Basic Operators
 */
/*
Math Operators*/
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'john is older');
var x;
console.log(typeof x);

/**********************
 *Operator Precedence 
 ***********/
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Operators
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More Operators
x *= 2;
console.log(x);

x += 10
console.log(x);

x--;
console.log(x);

/***********
 * CODING CHALLENGE 1
 */
var BMI1, BMI2, mass1, height1, mass2, height2;
mass1 = prompt("What is John's mass ?");
console.log("John's mass is " + mass1 + '.');
height1 = prompt("What is John's height?");
console.log("John's height is " + height1 + '.');
BMI1 = mass1 / (height1 * 2);

console.log("John's BMI is " + BMI1 + 'kg/meter.');

mass2 = prompt("What is Mark's mass ?");
console.log("Mark's mass is " + mass2 + '.');
height2 = prompt("What is Mark's height?");
console.log("Mark's height is " + height2 + '.');
BMI2 = mass2 / (height2 * 2);

console.log("Mark's BMI is " + BMI2 + 'kg/meter.');

var h = BMI2 > BMI1;

console.log("Something like Is Mark's BMI higher than John's ? " + h);

/*********88
 * IF ELSE
 */
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log('John is married!');
} else {
    console.log('Hopefully John will marry soon!');
}

var isMarries = true;
if (isMarries) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will marry soon.');
}

/*******
 * Boolean Operator
 */
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man');
}

/*********
 * Ternary Operators and Switch statements
 */
var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'driver';

switch (job) {
    case 'teacher':
        console.log(firstName + ' teach how to cook.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

/**************
 * Truthy and Falsy values and equality operators
 */
/*
false values: undefined, null, 0, '', Nan
truthy values: Not easy falsy values */
var height = 23;

if (height) {
    console.log(height + ' Variable is defines');
} else {
    console.log('Variable has not been defined.');
}

if (height == '23') {
    console.log('The == operator does type coercion');
}

/*****
 * CODING CHALLENGE 2
 */
var john1 = 97,
    john2 = 134,
    john3 = 105;
var mike1 = 134,
    mike2 = 97,
    mike3 = 105;

var avgJohn = (john1 + john2 + john3) / 3;
var avgMike = (mike1 + mike2 + mike3) / 3;

console.log('John average is ' + avgJohn + ' while Mike average is ' + avgMike + '.');
if (avgJohn > avgMike) {
    console.log('John is winner!');
} else if (avgMike > avgJohn) {
    console.log('Mike is winner!');
} else {
    console.log('Draw!');
}

var mary1 = 97,
    mary2 = 134,
    mary3 = 105;
var avgMary = (mary1 + mary2 + mary3) / 3;

console.log('John\'s average is ' + avgJohn + ' while Mike\'s average is ' + avgMike + ' while Mary\' average is ' + avgMary + '.');
switch (true) {
    case (avgJohn > avgMike) && (avgJohn > avgMary):
        console.log('John is winner!');
        break;
    case (avgMike > avgJohn) && (avgMary < avgMike):
        console.log('Mike is winner!');
        break;
    case (avgMary > avgJohn) && (avgMike < avgMary):
        console.log('Mary is winner');
        break;
    case (avgJohn === avgMary) && (avgMary > avgMike):
        console.log('John and Mary are draw while Mike is lost');
        break;
    case (avgMike === avgMary) && (avgMary > avgJohn):
        console.log('Mike and Mary are draw while John is lost');
        break;
    case (avgJohn === avgMike) && (avgMary < avgJohn):
        console.log('John and Mike are draw while Mary is lost');
        break;
    default:
        console.log('All teams are draw!!!');
}

/***********
 * FUNCTION 
 */
function CalculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = CalculateAge(1996),
    ageMike = CalculateAge(1948),
    ageMiks = CalculateAge(1990);

console.log(ageJohn, ageMike, ageMiks);

function yearsUntilRetirement(year, name) {
    var retirement = 65 - year;
    if (retirement < 0) {
        console.log(name + ' is already retired.');
    } else {
        console.log(name + ' retires in ' + retirement + ' years.');
    }
}

yearsUntilRetirement(ageJohn, 'John');
yearsUntilRetirement(ageMike, 'Mike');
yearsUntilRetirement(ageMiks, 'Miks');

/***************
 * Function Statements and Expression
 */
var whatYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teach how to cook.';
            break;
        case 'driver':
            return firstName + ' drives an uber in Lisbon.';
            break;
        case 'designer':
            return firstName + ' designs beautiful websites.';
            break;
        default:
            return firstName + ' does something else.';
    }
}
console.log(whatYouDo('driver', 'john'));
console.log(whatYouDo('designer', 'jane'));
console.log(whatYouDo('teacher', 'mike'));
console.log(whatYouDo('retires', 'marlou'));

/***********
 * Arrays
 */
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Diff. data types
var john = ['John', 'Smith', 1990, 'Teacher', false];
console.log(john);

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var designer = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer.';
console.log(designer);

john.push('designer');
var designer = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer.';
console.log(designer);

/*********
 * CODING CHALLENGE 2
 */

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]), tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);

/**********
 * OBJECTS AND PROPERTIES
 */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/****************
 * OBJECTS AND METHODS
 */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bobby'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
}

john.calcAge();
console.log(john);

/*********CODING CHALLERNG 4
 * 
 */

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass * (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higner BMI of ' + john.bmi);
} else if (john.calcBMI() < mark.calcBMI()) {
    console.log(mark.fullName + ' has the higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}

/*******
 * LOOPS and ITERATIONS
 */

var john = ['Mark', 'John', 'Me', 1998, 'designer', false];
for (let index = 0; index < john.length; index++) {
    console.log(john[i]);
}

while (i < john.length) {
    console.log(john[i]);
    i++;
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for (var i = john.length - 1; i >= john[i]; i++) {
    console.log(john[i]);
}

/***********
 * Coding Chanllenge 5
 */

var john = {
    fullName: 'John Cena',
    bills: [124, 88, 368, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bills = this.bills[i];

            if (bills < 50) {
                percentage = .2;
            } else if (bills >= 50 && bills < 100) {
                percentage = .15;
            } else {
                percentage = 0.1
            }

            this.tips[i] = bills * percentage;
            finalValues = bills + bills * percentage;
        }
    }
}

var brock = {
    fullName: 'Brock Lesnar',
    bills: [130, 90, 168, 480, 62],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bills = this.bills[i];

            if (bills < 50) {
                percentage = .2;
            } else if (bills >= 50 && bills < 200) {
                percentage = .5;
            } else {
                percentage = 0.1
            }

            this.tips[i] = bills * percentage;
            finalValues = bills + bills * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
brock.calcTips();
console.log(john, brock);

john.average = calcAverage(john.tips);
brock.average = calcAverage(brock.tips);
console.log(john, brock);

if (john.average > brock.average) {
    console.log(john.fullName + '\s family pays higher tips, with an average of $' + john.average);
} else if (john.average < brock.average) {
    console.log(brock.fullName + '\s family pays higher tips with an average of $' + brock.average);
}