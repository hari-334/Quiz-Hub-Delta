const searchBar = document.querySelector("#searchBar");
const suggestionsList = document.querySelector("#suggestionsList");
const suggestionsBox = document.querySelector("#suggestionsBox");
const searchInput = document.querySelector("#searchBox")

quizzesInfo = JSON.parse(quizzesInfo);
usersInfo = JSON.parse(usersInfo);

console.log(quizzesInfo, usersInfo);

let infoArray = ["user1", "user2", "quiz1", "quiz2"]
let nameSuggestionsArray = [];
let usernameSuggestionsArray = [];
let quizSuggestionsArray = [];
let html_search=``;
let clickedOutsideSearchBar;

let usersInfoObject = {
    username: [],
    name: []
};

let quizzesInfoArray = [];

usersInfo.forEach((element, index) => {
    usersInfoObject.username.push(element.username);
    usersInfoObject.name.push(element.name)
})

quizzesInfo.forEach((element, index) => {
    quizzesInfoArray.push(element.quizname);
})
console.log(quizzesInfo);

searchInput.addEventListener("keyup", (e) => {
    
    if (searchInput.value){
        suggestionsBox.classList.add("active");

        html_search = "";

        nameSuggestionsArray = usersInfoObject.name.filter((name) => {
            return name.toLocaleLowerCase().startsWith(searchInput.value.toLocaleLowerCase());
        });
        
        nameSuggestionsArray.forEach((element) => {
            usersInfo.forEach((e, i) => {
                if (e.name == element && e.name != usersName){
                    html_search += `<li><a href="/user?username=${e.username}"><div>
                    <h4>${element}</h4>
                    <p>@${e.username}</p>
                    </div></a></li>`;
                }
            })
        })
        console.log(nameSuggestionsArray);
        usernameSuggestionsArray = usersInfoObject.username.filter((username) => {
            return (username.toLocaleLowerCase().startsWith(searchInput.value.toLocaleLowerCase()));
        });

        usernameSuggestionsArray.forEach((element) => {
            usersInfo.forEach((e, i) => {
                if (e.username == element && !(nameSuggestionsArray.includes(e.name)) && e.username != username){

                    html_search += `<li><a href="/user?username=${element}"><div>
                    <h4>${e.name}</h4>
                    <p>@${element}</p>
                    </div></a></li>`;
                }
            })
        })

        quizSuggestionsArray = quizzesInfoArray.filter((quizName) => {
            return quizName.toLocaleLowerCase().startsWith(searchInput.value.toLocaleLowerCase());
        });

        quizSuggestionsArray.forEach((element) => {
            quizzesInfo.forEach((e, i) => {
                if (e.quizname == element){
                    console.log(e);
                    html_search += `<li><a href="/quiz?quizCode=${e.quizcode}"><div>
                    <h4>Quiz: ${e.quizname}</h4>
                    </div></a></li>`;
                }
            })
        })
        console.log(html_search);
        suggestionsList.innerHTML = html_search;
    }
    else{
        suggestionsBox.classList.remove("active");
    }
    
})

document.addEventListener('click', function(event) {
    clickedOutsideSearchBar = !searchBar.contains(event.target);
    
    if (clickedOutsideSearchBar){
        suggestionsBox.classList.remove("active");
        
    }
  });
