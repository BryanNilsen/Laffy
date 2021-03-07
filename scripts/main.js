import { getDadJoke, getGiphysFromAPI, useGiphy } from "./DataManager.js";


const loadJokeAndGiphy = () => {

    getDadJoke().then(joke => {
        console.log('joke: ', joke);
        render(jokeHTML(joke), "joke__container")
    })

    const giphy = useGiphy()
    console.log('giphy: ', giphy);
    render(giphyHTML(giphy), "giphy__container")
}

const giphyHTML = (giphyObj) => {
    return `
    <div class="giphy__wrapper">
        <img src="${giphyObj.images.fixed_width.url}" alt="${giphyObj.title}"
    </div>
    `
}
const jokeHTML = (jokeObj) => {
    return `
    <div class="joke__wrapper">
        ${jokeObj.joke}
    </div>
    `
}


const render = (html, elementId) => {
    const element = document.getElementById(elementId)
    element.innerHTML = html
}

getGiphysFromAPI()
    .then(loadJokeAndGiphy)

const laffBtn = document.getElementById("laff-btn")
laffBtn.addEventListener("click", loadJokeAndGiphy)