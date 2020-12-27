// //*****************var, const let *****************//

/////***ES5 */
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//*****ES6 */
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
console.log(name6);

//*******ES5 */
function driversLincensed(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = '1990';
    }
    console.log(firstName + ', born in ' + yearOfBirth +
        ', is now officially allowed to drive a car.');
}
driversLincensed(true);

/////***********ES6 */
function driversLincensed6(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = '1990';
    }
    console.log(firstName + ', born in ' + yearOfBirth +
        ', is now officially allowed to drive a car.');
}

driversLincensed6(true);

let index = 23;

for (let index = 0; index < 5; index++) {
    console.log(index);
}
console.log(index);


//*********BLOCKS AND IIFEs *********************/
// //***ES6 */////

{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a);
//console.log(b);
console.log(c);

//*ES5*/
(function() {
    var d = 3;
})();
//console.log(d);

//********STRINGS */

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2020 - year;
}

//***ES5 */
console.log('This is ' + firstName + ' ' + lastName + '. Today he is ' + calcAge(yearOfBirth) + '.');

//**ES6 */
console.log(`This is ${firstName} ${lastName}. He was born in year ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));


//*********ARROW FUNCTIONS */
const years = [1990, 1965, 1982, 1937];

/**ES5 */
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

//**ES6 */
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element: ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6);


////************Arrow 2 *////
// ////**ES5 */
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green')
            .addEventListener('click', function() {
                var str = 'This is box number ' + self.position + ' and it is ' + self.color;
                alert(str);
            });
    }
}
box5.clickMe();

////**ES6 */
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green')
            .addEventListener('click', () => {
                var str = 'This is box number ' + this.position + ' and it is ' + this.color + '.';
                alert(str);
            });
    }
}
box6.clickMe();

function Person(name) {
    this.name = name;
}

// ////*****ES5 */
Person.prototype.myFriends5 =
    function(friends) {
        var arr = friends.map(function(el) {
            return this.name + ' is friends with ' + el;
        }.bind(this));

        console.log(arr);
    }

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

Person.prototype.myFriends6 =
    function(friends) {
        var arr = friends.map(el =>
            `${this.name} is friends with ${el}`);

        console.log(arr);
    }

new Person('Mike').myFriends6(friends);

////******Destructing */
var john = ['John', 26];

// ////***ES5 */
var name = john[0];
var age = john[1];

// ////***ES6 */

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age6, retirement] = calcAgeRetirement(1975);
console.log(age6);
console.log(retirement);

const boxes = document.querySelectorAll('.box');

////***ES5 */
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//***ES6 */
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur =>
    cur.style.backgroundColor = 'dodgerblue');

//***ES5 */

for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}

////****ES6 */
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blues!';
}


//***ES5 */
var ages = [12, 17, 8, 14, 21, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//***ES6 */
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


////*****SPREAD OPERATOR */
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//**ES5 */
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//**ES6 */
var ages = [18, 30, 12, 21];
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

/////***Rest Parameters */
//// ES5
function isFullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//**ES6 */
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965, 2016, 1987);


////******DEFAULT PARAMETERS */
function SmithPerson(firstName, yearOfBirth,
    lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;

    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1997);
console.log(john);

//***ES6 */
function SmithPerson(firstName, yearOfBirth,
    lastName = 'Smith', nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1997);
var emily = new SmithPerson('Emily', 1998, 'Willis', 'Spanish');

// ////***LECTURES OF MAP */
const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));

question.forEach((value, key) =>
    console.log(`this is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

////***CLASS */

// //ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge =
    function() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

var john5 = new Person5('John', 1990, 'teacher');

// //ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}
var john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();

// ////****Classes w/ SubClasses ****////
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge =
    function() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

////ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    // static greeting() {
    //     console.log('Hey there!');
    // }
}
var john6 = new Person6('John', 1990, 'teacher');
//Person6.greeting();

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge(); //



//********PROBLEM SOLVING */
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density
        of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in 
        ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2, 9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {
    const sum = arr.reduce((prev, current, index) => prev + current, 0);

    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(el => el.treeDensity());

    //Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

    //Which park has more than 1000 trees.
    const i = p.map(el => el.numTrees).findIndex(el => el => 1000);
    console.log(`${p[i].name} has more than 1000 trees.`)
}

function reportStreets(s) {
    console.log('-----STREETS REPORT-----');

    //Total and Average length of the town's streets

    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length 
    of ${totalLength} km, with an average of ${avgLength} km.`);

    //Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);