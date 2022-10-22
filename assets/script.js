let highScore = document.getElementById("#high-score");
let timer = document.getElementById("#timer-text");
let quizQuestion = document.getElementById("#quiz-question");
let buttonContainer = document.getElementById("#quiz-btn");
let initialTextBox = document.getElementById("#initials");
let initialButton = document.getElementById("#intials-btn");


// Array with Quiz questions and answer selection.  Answers options set to 'True' for correct and 'False' if not correct choice option.
const quiz = [
    {
        question: "In Javascript, Arrays can be stored using the following: ",
        answers: [{
            text: "Numbers", isCorrect: false
        }, {
            text: "Strings", isCorrect: false
        }, {
            text: "Booleans", isCorrect: false
        }, {
            text: "All of the above", isCorrect: true
        }] 
    },
    {
        question: "A JavaScript Boolean represents one of two values: ",
        answers: [{
            text: "Numbers, Strings", isCorrect: false
        }, {
            text: "On, Off", isCorrect: false
        }, {
            text: "True, False", isCorrect: true
        }, {
            text: "Yes, No", isCorrect: false
        }] 
    },
    {
        question: "Which of the following is considered one of the seven primitive data types in Javascript?",
        answers: [{
            text: "'set'", isCorrect: false
        }, {
            text: "'get'", isCorrect: false
        }, {
            text: "Function", isCorrect: false
        }, {
            text: "Undefined", isCorrect: true
        }] 
    },    {
        question: "____ is also the only value in JavaScript that is not equal to itself.",
        answers: [{
            text: "NaN", isCorrect: true
        }, {
            text: "0", isCorrect: false
        }, {
            text: "4", isCorrect: false
        }, {
            text: "10", isCorrect: false
        }] 
    },    {
        question: "The _______ type represents textual data:",
        answers: [{
            text: "Numeric", isCorrect: false
        }, {
            text: "String", isCorrect: true
        }, {
            text: "Boolean", isCorrect: false
        }, {
            text: "Object", isCorrect: false
        }] 
    },    {
        question: "________ enables storing a collection of multiple items under a single variable name.",
        answers: [{
            text: "Functions", isCorrect: false
        }, {
            text: "Arrays", isCorrect: true
        }, {
            text: "Primitives", isCorrect: false
        }, {
            text: "If Statement", isCorrect: false
        }] 
    },    {
        question: "_______ can be used to specifiy a block of JavaScript code to be executed if a condition is true.",
        answers: [{
            text: "Logical Operator", isCorrect: false
        }, {
            text: "Console.log()", isCorrect: false
        }, {
            text: "API", isCorrect: false
        }, {
            text: "If Statment", isCorrect: true
        }] 
    },    {
        question: "In javascript, what type of loop will loop through a block of code a number of times?",
        answers: [{
            text: "for loop", isCorrect: true
        }, {
            text: "while loop", isCorrect: false
        }, {
            text: "if, else statment", isCorrect: false
        }, {
            text: "do/while loop", isCorrect: false
        }] 
    },    {
        question: "What type of bracket is used to indicate that a variable is an array?",
        answers: [{
            text: "()", isCorrect: false
        }, {
            text: "{}", isCorrect: false
        }, {
            text: "[]", isCorrect: true
        }, {
            text: "||", isCorrect: false
        }] 
    },    {
        question: "What would be used to indicate a 'strict equality operator'?",
        answers: [{
            text: "!=", isCorrect: false
        }, {
            text: "===", isCorrect: true
        }, {
            text: "===", isCorrect: false
        }, {
            text: "!", isCorrect: false
        }] 
    }
     
]



let answerBtn = document.createElement("button");
answerBtn.innerHTML = "";



