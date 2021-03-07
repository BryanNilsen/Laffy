import { getDadJoke, useGiphy } from "./DataManager.js";
import { GiphyHTML } from "./GiphyHTML.js";
import { JokeHTML } from "./JokeHTML.js";
import { render } from "./render.js"

export const App = () => {
    // get and render dad joke
    getDadJoke().then(joke => {
        render(JokeHTML(joke), "joke__container")
    })

    // get and render giphy
    const giphy = useGiphy()
    render(GiphyHTML(giphy), "giphy__container")
}

const laffBtn = document.getElementById("laff-btn")
laffBtn.addEventListener("click", App)