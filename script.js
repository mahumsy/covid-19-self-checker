//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome

	

var questionCount = 0;

var testedScore = 0;
var emergencyScore = 0;
var stayScore = 0;






//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");


//question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");


//question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


//question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");


//question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");


//question 6
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");



var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", tested);
q1a2.addEventListener("click", stay);
q1a3.addEventListener("click", stay);


q2a1.addEventListener("click", tested);
q2a2.addEventListener("click", stay);


q3a1.addEventListener("click", tested);
q3a2.addEventListener("click", stay);


q4a1.addEventListener("click", emergency);
q4a2.addEventListener("click", stay);

q5a1.addEventListener("click", stay);
q5a2.addEventListener("click", stay);

q6a1.addEventListener("click", stay);
q6a2.addEventListener("click", stay);








//#TODO: Define quiz functions here
function tested() {
  testedScore += 5;
  questionCount += 1;
  if (questionCount >= 6){
      updateResult();
  }
}

function emergency() {
  emergencyScore += 20;
  questionCount += 1;
  if (questionCount >= 6){
      updateResult();
  }
}

function stay() {
  stayScore += 1;
  questionCount += 1;
  if (questionCount >= 6){
      updateResult();
  }
}





//result
function updateResult(){
 if (emergencyScore > testedScore && emergencyScore > stayScore){
         result.innerHTML = "Urgent medical attention may be needed. Call 911 or go to the Emergency Department.";
 }
 else if(testedScore > emergencyScore && testedScore > stayScore){
        result.innerHTML = "You may want to get tested for COVID-19. Call your healthcare provider or find a testing site near you.";
 }
 else if(stayScore > emergencyScore && stayScore > testedScore){
    result.innerHTML = "Stay at home for now. If needed, call your medical provider. Try to avoid public places.";
 }
 
 else{
    result.innerHTML = "Try again later.";
 }
}


