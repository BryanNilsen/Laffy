import { settings } from "./Settings.js"

export const getGiphy = () => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=laughing&api_key=${settings.giphyKey}&limit=50`)
        .then(res => res.json())
        .then(giphyData => giphyData.data[Math.floor(Math.random() * giphyData.data.length)])
}

export const getDadJoke = () => {
    return fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json())
}