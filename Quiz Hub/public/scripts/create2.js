const displayBox = document.getElementById("display-box");
const inputsBox = document.getElementById("input");
const inputForm = document.querySelector("#quizForm");

let html = "";
for (var i = 0; i < numberOfQuestions; i++){
    html += `<div class="card">
    <h2>Question ${i + 1}: <input class="option" type="text" name="${i + 1}" required autofocus></h2>
    <h2>A) <input class="option" type="text" name="${i + 1}" required ></h2>
    <h2>B) <input class="option" type="text" name="${i + 1}" required ></h2>
    <h2>C) <input class="option" type="text" name="${i + 1}" required ></h2>
    <h2>D) <input class="option" type="text" name="${i + 1}" required ></h2>
    <p>Correct Answer:</p>
    <input type="radio" name="${i + 1}" value="0" required >A</input>
    <input type="radio" name="${i + 1}" value="1" >B</input>
    <input type="radio" name="${i + 1}" value="2" >C</input>
    <input type="radio" name="${i + 1}" value="3" >D</input>
    </div>`;
    
}

inputsBox.innerHTML = inputsBox.innerHTML + html;

const inputNumberOfQuestions = document.querySelectorAll(".number-of-questions");
const submitButton = document.querySelector("button");

console.log(numberOfQuestions);
console.log(inputNumberOfQuestions[0]);

inputNumberOfQuestions.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        numberOfQuestions = e.target.innerText;
    });
});

document.addEventListener("submit", (e) => {
  alert("Quiz Created!")
})

