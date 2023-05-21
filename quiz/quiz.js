// Quiz Questions
var questions = [
  {
    country: "Canada",
    correctShape: "canada",
    question: "Where is Canada?"
  },
  {
    country: "United States",
    correctShape: "us",
    question: "Where is the United States?"
  },
  {
    country: "Mexico",
    correctShape: "mexico",
    question: "Where is Mexico?"
  }
];

var score = 0;
var currentQuestion = 0;

var mapDiv = document.getElementById("map");
var startButton = document.getElementById("startButton");

// Function to display the current question
function displayQuestion() {
  if (currentQuestion >= questions.length) {
    finishQuiz();
    return;
  }

  mapDiv.addEventListener("click", checkAnswer);
  startButton.disabled = true;
  startButton.style.display = "none";
  mapDiv.style.pointerEvents = "auto";

  var question = questions[currentQuestion];
  var prompt = document.createElement("p");
  prompt.textContent = question.question;
  mapDiv.appendChild(prompt);
}

// Function to check the user's answer
function checkAnswer(event) {
  mapDiv.removeEventListener("click", checkAnswer);
  mapDiv.style.pointerEvents = "none";

  var target = event.target;
  var selectedShape = target.getAttribute("id");

  var question = questions[currentQuestion];

  if (selectedShape === question.correctShape) {
    score++;
    target.style.fill = "green";
    alert("Correct!");
  } else {
    target.style.fill = "red";
    alert("Incorrect. Try again!");
  }

  currentQuestion++;
  setTimeout(displayQuestion, 1000);
}

// Function to finish the quiz
function finishQuiz() {
  mapDiv.innerHTML = "";
  var scoreDisplay = document.createElement("p");
  scoreDisplay.textContent = "Your score: " + score + " out of " + questions.length;
  mapDiv.appendChild(scoreDisplay);

  var restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  mapDiv.appendChild(restartButton);

  restartButton.addEventListener("click", function () {
    score = 0;
    currentQuestion = 0;
    restartButton.parentNode.removeChild(restartButton);
    displayQuestion();
  });
}

// Start the quiz
startButton.addEventListener("click", displayQuestion);
