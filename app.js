"use strict"

const BASE_URL;
const API_KEY;
const GIF_AREA = $("#gifs");

/** getGif: finds gif and adds it to DOM */
async function getGif(evt) {
    evt.preventDefault();
    let search = $("#text-input").val();
    // let api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    // let url = "http://api.giphy.com/v1/gifs/search"
    let url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    let response = await axios.get(url);

    let gifURL = response.data.data[0].images.original.url;
    let gif = $(`<img src = ${gifURL} alt = ${title}">`);
    GIF_AREA.append(gif);
}

/** removeGifs: removes gifs */
function removeGifs(evt) {
    evt.preventDefault();
    GIF_AREA.empty();
}

$("#submit").click(getGif);
$("#remove").click(removeGifs);