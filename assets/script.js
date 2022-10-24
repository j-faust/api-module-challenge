let highScore = document.getElementById("high-score");
let timer = document.getElementById("timer-text");
let quizQuestion = document.getElementById("quiz-question");
let buttonContainer = document.getElementById("quiz-btn");
let initialTextBox = document.getElementById("initials-text-box");
let initialButton = document.getElementById("initials-btn");
let currentQuestion = -1;
let userScore = 0;
let timeLeft = 120;


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
            text: "( )", isCorrect: false
        }, {
            text: "{ }", isCorrect: false
        }, {
            text: "[ ]", isCorrect: true
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
            text: "==", isCorrect: false
        }, {
            text: "!", isCorrect: false
        }] 
    }
     
]

// function to begin quiz -- it will hide the instruction box and display the first quiz question when start is clicked
function beginQuiz() {
    // timer set to start for time given to complete the quiz
    let countdown = setInterval(function() {
        if(timeLeft <= -1) {
            clearInterval(countdown); 
            quizOver();  
        } else {
            document.getElementById("timer-text").innerText = "Time Left: " + timeLeft //sets time left to  be displayed on the the page
        }
        timeLeft--;
    }, 1000);
    

    // hide box with initial instructions and start quiz button
    document.getElementById("instruction-box").setAttribute('style', 'display: none');

    // display quiz box with first question in the quiz box
    document.getElementById("quiz-container").setAttribute('style', 'display: block');

    nextQuestion();
    return false;

}

// Function for the questions -> If the questions haven't reached the total length of the quiz array then it will proceed to the next question, if it is at the last question in the array then it will go to 
// the endQuiz() function to proceed and have the user enter intials for high score board.
function nextQuestion() {
    currentQuestion++;
    if(currentQuestion >= quiz.length) {
        quizOver();
    } else {
        let q = quiz[currentQuestion]
        document.getElementById("question-container").innerText = q.question;

        const e = document.getElementById("quiz-btn"); // assigning 'e' to get element from HTML doc
        
        // using 'while' loop to loop through and remove all the child elements each time to prevent from
        // all answer choices showing as the questions progress
        let child = e.lastElementChild;
        while (child) {
        e.removeChild(child); //removing child elements for answer buttons
        child = e.lastElementChild;
        }
        q.answers.forEach(addAnswerButton);

    };

}

// Function to add answer choice buttons to the questions
function addAnswerButton(a) {
    let answrBtn = document.createElement("BUTTON");
    answrBtn.innerText = a.text;
    answrBtn.value = a.isCorrect; 
    answrBtn.onclick = answerQuestion;
    document.getElementById("quiz-btn").appendChild(answrBtn);    
    
}

// function that if the question is answered correct, then the user's score will add 1 point, if incorrect time will be deducted by 10 seconds.

function answerQuestion(event) {
    let correct = event.srcElement.value;
    
    if(correct == "true") {
        userScore++;
    } else {
        timeLeft -= 10;

    }
    
    showStatusMessage(correct); // status message to displace on bottom if previous answer was correct or incorrect
    nextQuestion(); // function call to display next question for the user
    
}

// status message set to display to user whether the previous was correct or incorrect at the bottom of the container
function showStatusMessage(correct) {
    if(correct == "true") {
        document.getElementById("statusMessageA").innerText = "Correct!"; // if answer is correct displays correct to user
    } else {
        document.getElementById("statusMessageA").innerText = "Incorrect!"; // if answer is incorrect displays incorrect to user
    };
}

function quizOver() {
    document.getElementById("quiz-container").setAttribute('style', 'display: none');
    document.getElementById("final-score").innerText = "Your Final Score: " + userScore + "/10";
    document.getElementById("quiz-over-container").setAttribute('style', 'display: block');
    timeLeft = 0;

}


function saveUser() {

let saveUserScore = 
    {
    userHighScore: userScore,
    initialsEntered: initialTextBox.value.trim()
};

let topScores = [];
let scoresString = localStorage.getItem("userScores");

if (scoresString == undefined || scoresString == null) {
    topScores = []
} else {
    topScores = JSON.parse(scoresString);
}

topScores.push(saveUserScore);
topScores.sort(compare);
localStorage.setItem("userScores", JSON.stringify(topScores));

tryAgain();

}

function compare( a, b ) {
    if ( a.userHighScore < b.userHighScore ){
      return -1;
    }
    if ( a.userHighScore > b.userHighScore ){
      return 1;
    }
    return 0;
  }


function tryAgain() {
    document.getElementById("quiz-over-container").setAttribute('style', 'display: none');
    document.getElementById("return-container").setAttribute('style', 'display: block');

  }



