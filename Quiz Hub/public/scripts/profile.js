const displayBox = document.getElementById("display-box");
const hiddenInput = document.getElementById("hidden");
quizzes = JSON.parse(quizzes);
console.log(quizzes)

displayBox.style["grid-template-rows"] = `repeat(${quizzes.length}, 40px)`;

let html = "";

quizzes.forEach((element, index) => {
    html += `<a href="/quiz?quizCode=${element.quizcode}"><div class="card" style="grid-row-start:${index + 1}">${element.quizname}</div></a>`;
});

displayBox.innerHTML += html;