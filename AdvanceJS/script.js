////*******************************FUNCTIOn CONSTRUCTOR
var john = {
    name: 'John',
    dateOfBirth: 1995,
    job: 'teacher'
};

var Person = function(name, dateOfBirth, job) {
    this.name = name,
        this.dateOfBirth = dateOfBirth,
        this.job = job
}

Person.prototype.calculateAge = function() {
    console.log(2020 - this.dateOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1995, 'teacher');
john.calculateAge();
console.log(john.lastName);
var katrina = new Person('Katrina', 1985, 'doctor');
katrina.calculateAge();
console.log(katrina.lastName);
var ben = new Person('Ben', 1975, 'astronaut');
ben.calculateAge();
console.log(ben.lastName);

//**********************************OBJECT CREATE
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1992 },
    job: { value: 'designer' }
});

////***************************PRIMITIVES VS OBJECTS

Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age);
console.log(obj);


////******************************PASSING FUCNTIONS AS ARGUMENTS
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculatAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculatAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


///////*******************FUNCTION RETURNIN FUNCTIONS 
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' can  you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('john');
designerQuestion('mary');

interviewQuestion('teacher')('Mark')

//************************************************IIFE */
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);

**
** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** CLOSURES * /

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementUS(1985);
retirementGermany(1989);
retirementIceland(1997);

function interviewJob(job) {
    if (job === 'teacher') {
        var a = ', What subject do you teach?';
        return function(name) {
            console.log(name + a);
        }
    } else if (job === 'designer') {
        var a = ', Can you explain what UX is ?';
        return function(name) {
            console.log(name + a);
        }
    } else {
        var a = ' What do you do?'
        return function(name) {
            console.log('Hello' + name + a);
        }
    }
}

// var markJob = interviewJob('teacher');
// markJob('Mark');
// var janeJob = interviewJob('designer');
// janeJob('Jane');
interviewJob('teacher')('Mark');
interviewJob('designer')('Jane');

//**********************BIND AND APPLY */

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']);
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculatAge(el) {
    return 2020 - el;
}

function isFullAge(el, limit) {
    return el >= limit;
}

var ages = arrayCalc(years, calculatAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

//**********************CODING CHALLENGE */
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)')
        }
    }
    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'],
        0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'],
        2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);
    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer);
})();
////////////////////////////////////expert level////////////
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }


    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'],
        0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'],
        2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();