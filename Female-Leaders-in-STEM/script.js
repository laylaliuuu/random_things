/* .js files add interaction to your website */

var displayName = document.getElementById("scriptReturn");
var generateButton = document.getElementById("generateButton");

if(generateButton)
{
  generateButton.addEventListener("click",generateScript);
}

function generateScript()
  {
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var message = document.getElementById("message").value;
    
    displayName.innerHTML = "Hello! My name is " + name + " and I live in " + city + ". I am calling to tell you that " + message;
  }


var factList = [
  "The percentage of women among STEM graduates is about 19%.",
  "74% of female teens express interest in STEM topics.",
  "77% of Facebook’s global tech-related jobs are occupied by men.",
  "Of the 41 Fortune 500 companies in the technology sector, only five have female CEOs.",
  "Apple employees are 30% female and 70% male.",
  "55% of women in tech careers start in entry-level positions. Only 39% of men start at the bottom rung.",
  "Only 1/4 of tech conference keynotes in the last three years were delivered by women.",
   "11% of the engineering workforce is female.",
  "Women leave the tech industry at a 45% higher rate than men.",
  "28% of women leaving tech jobs cite a lack of career growth opportunities as a reason.",
  "In the tech industry, men are offered the same job role as women, but they’re offered higher salaries for the same position 60% of the time.",
  "25% of women in tech feel they are managed differently because of their gender." 
]

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton")
var count = 0;

if(factButton)
{
  factButton.addEventListener("click",displayFact);
}
function displayFact()
{
  fact.innerHTML = factList[count];
  count++;
  if(count == factList.length)
  {
    count = 0;
  }
}