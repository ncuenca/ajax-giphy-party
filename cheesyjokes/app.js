"use strict";

const BASE_URL = "https://icanhazdadjoke.com/";
const JOKE_AREA = $("#jokes");



async function getJokes(i) {
    
    let up = $(`<button class="UP" id="up${i}"> UP </button>`)
    let down = $(`<button class="DOWN" id="down${i}"> DOWN </button>`)
    let score = $(`<p id="score${i}">0</p>`)

    let response = await axios.get(BASE_URL,
        {
            headers: {
                accept: "text/plain"
            }
        });
    let joke = response.data;
    let jokeText = $(`<li> ${joke} </li>`);
    jokeText.append(up);
    jokeText.append(down);
    jokeText.append(score);
    JOKE_AREA.append(jokeText);

}

// $(getJokes);

for (let i = 1; i <= 10; i++){
    getJokes(i);
}


function vote(){
    $(`#jokes`).on("click", ".UP", function(e){
        let idx = e.target.id[e.target.id.length-1];
        $(`#score${idx}`).text(Number($(`#score${idx}`).text()) + 1);

    })

    $(`#jokes`).on("click", ".DOWN", function(e){
        let idx = e.target.id[e.target.id.length-1];
        $(`#score${idx}`).text(Number($(`#score${idx}`).text()) - 1);
        
    })
}

vote();
