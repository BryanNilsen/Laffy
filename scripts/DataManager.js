import { settings } from "./Settings.js" // stores GIPHY API KEY
import { getRandomInt } from "./utilities.js" // random int function


// DAD JOKE DATA
// gat random dad joke from API
export const getDadJoke = () => {
    return fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json())
}



// GIPHY DATA
// store giphy data from API to limit request - (50 giphys)
let giphyArray = []

// set giphyArrayIndex
let i = 0

// gets next giphy in the array to avoid random repeats
export const useGiphy = () => {
    if (i < giphyArray.length) {
        return giphyArray[i++]
    } else {
        // resets i to zero to start at beginning of array
        i = 0
        return giphyArray[i++]
    }
}


// gat random group of 50 gifs from Giphy API and set into giphyArray "state"
export const getGiphysFromAPI = () => {
    // offset allows us to select random set of 50 from giphy API - max number depends on overall results
    const randomOffset = getRandomInt(4999)
    return fetch(`https://api.giphy.com/v1/gifs/search?q=laughing&api_key=${settings.giphyKey}&limit=50&offset=${randomOffset}&rating=g`)
        .then(res => res.json())
        .then(giphyDataFromAPI => {
            giphyArray = giphyDataFromAPI.data
            return
        })
}
