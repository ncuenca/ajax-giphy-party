"use strict"

const BASE_URL = "http://api.giphy.com/v1/gifs";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const GIF_AREA = $("#gifs");

/** getGif: finds gif and adds it to DOM */
async function getGif(evt) {
    evt.preventDefault();
    let search = $("#text-input").val();
     
    // let url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    // let response = await axios.get(url);
    let response = await axios.get(`${BASE_URL}/search`, {params:{api_key:API_KEY,  q:search}});
    let gifURL = response.data.data[0].images.original.url;
    let gif = $(`<img src = ${gifURL}>`);
    
    GIF_AREA.append(gif);
}

/** removeGifs: removes gifs */
function removeGifs(evt) {
    evt.preventDefault();
    GIF_AREA.empty();
}

$("#submit").click(getGif);
$("#remove").click(removeGifs);