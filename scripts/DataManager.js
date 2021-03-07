import { settings } from "./Settings.js"
import { getRandomInt } from "./utilities.js"

// store giphy data from API to limit request - (50 giphys)
let giphyArray = []


let index = 0
// gets next giphy in the array to avoid random repeats
export const useGiphy = () => {
    if (index < giphyArray.length) {
        return giphyArray[index++]
    } else {
        // resets index to zero to start at beginning of array
        index = 0
        return giphyArray[index++]
    }

}


// gat random group of 50 giphys and set into "state"
export const getGiphysFromAPI = () => {
    const randomOffset = getRandomInt(1300)
    console.log('randomOffset: ', randomOffset);
    return fetch(`https://api.giphy.com/v1/gifs/search?q=laughing&api_key=${settings.giphyKey}&limit=50&offset=${randomOffset}&rating=g`)
        .then(res => res.json())
        .then(giphyDataFromAPI => {
            console.log('giphyDataFromAPI: ', giphyDataFromAPI);
            giphyArray = giphyDataFromAPI.data
            return
        })
}

export const getDadJoke = () => {
    return fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json())
}