/*Add your JavaScript here*/
var idealisticCount = 0;
var realisticCount = 0;
var questionCount = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var result = document.getElementById("result");
var display = document.getElementById("display");
var restart = document.getElementById("restart");

q1a1.addEventListener("click", idealistic);
q1a2.addEventListener("click", realistic);
q2a1.addEventListener("click", realistic);
q2a2.addEventListener("click", idealistic);
q3a1.addEventListener("click", idealistic);
q3a2.addEventListener("click", realistic);
q4a1.addEventListener("click", idealistic);
q4a2.addEventListener("click", realistic);
q5a1.addEventListener("click", realistic);
q5a2.addEventListener("click", idealistic);
display.addEventListener("click", displayResult);
restart.addEventListener("click", Restart);



function idealistic() {
  idealisticCount++;
  questionCount++;
  console.log("question Count = " + questionCount + " , idealistic Score = " + idealisticCount);  
}

function realistic() {
  realisticCount++;
  questionCount++;
  console.log("question Count = " + questionCount + " , realistic Score = " + realisticCount);
}

function displayResult()
  {
    if (questionCount ==5)
    {
      updateResult();
    }
  }

function updateResult()
{
  if (realisticCount >= 3)
  {
    result.innerHTML = "You are realistic!";
    console.log("You are realistic!");
  }
  else if (idealisticCount >=3)
  {
    result.innerHTML = "You are idealistic!";
    console.log("You are idealistic!");
  }
}

function Restart()
  {
    idealisticCount = 0;
    realisticCount = 0;
    questionCount = 0;
    result.innerHTML = "You are...";
    console.log("You are...");
    q1a1.disabled = false;
    q1a2.disabled = false;
    q2a1.disabled = false;
    q2a2.disabled = false;
    q3a1.disabled = false;
    q3a2.disabled = false;
    q4a1.disabled = false;
    q4a2.disabled = false;
    q5a1.disabled = false;
    q5a2.disabled = false;
    
  }

q1a1.addEventListener ("click", disable1);
q1a2.addEventListener ("click", disable1);
function disable1() {
   q1a1.disabled = true;
   q1a2.disabled = true;
}

q2a1.addEventListener ("click", disable2);
q2a2.addEventListener ("click", disable2);
function disable2() {
   q2a1.disabled = true;
   q2a2.disabled = true;
}

q3a1.addEventListener ("click", disable3);
q3a2.addEventListener ("click", disable3);
function disable3() {
   q3a1.disabled = true;
   q3a2.disabled = true;
}

q4a1.addEventListener ("click", disable4);
q4a2.addEventListener ("click", disable4);
function disable4() {
   q4a1.disabled = true;
   q4a2.disabled = true;
}

q5a1.addEventListener ("click", disable5);
q5a2.addEventListener ("click", disable5);
function disable5() {
   q5a1.disabled = true;
   q5a2.disabled = true;
}