const displayBox = document.getElementById("display-box");
const inputsBox = document.getElementById("input");
const inputForm = document.getElementById("quizForm");
const inputNumberOfQuestions = document.querySelectorAll(".numberOfQuestions");
const submitButton = document.querySelector("button");

async function postJSON(data) {
    try {
      var response = await fetch("/buffer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      
    } catch (error) {
      console.error("Error:", error);
    }
}

console.log(numberOfQuestions);
console.log(inputNumberOfQuestions[0]);

inputNumberOfQuestions.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        numberOfQuestions = e.target.innerText;
        submitButton.click();
    });
});
const data = "hello";

