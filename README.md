# Laffy

Dad jokes are great, right? But you know what's even better than dad jokes... dad jokes WITH ANIMATED GIFS!!

Laffy combines the best of both worlds and provides a simple, elegant, and HILARIOUS web application to induce uproarious laffter in even the most serious viewer.

Laffy is built with vanilla javascript and utilizes data from [GIPHY.com](https://giphy.com/) and [icanhazdadjoke.com](https://icanhazdadjoke.com/)

<hr/>

## Preview

![Laffy Demo](./images/laffy-demo.gif)

<hr/>

## Using this repository:
1. Clone this repo
1. Create an account at [Giphy.com](https://developers.giphy.com/)
1. Create a GIPHY API Key by clicking “Create an App” on the Developer Dashboard as per the [developers instructions](https://developers.giphy.com/docs/api#quick-start-guide)
1. Copy your new GIPHY API key and paste it into the`Settings-example.js` file:
```
export const settings = {
    giphyKey: "YOUR_API_KEY_HERE",
};
```
5. Rename the `Settings-example.js` file to `Settings.js` - _(this file is in the .gitignore in order to prevent your API key from being exposed publicly)_

<hr/>

## Fundamentals Demonstrated:
- fetching data from external API
- ES6 modules - importing/exporting
- git/GitHub version control
- Math.random()
- DOM manipulation - .innerHTML
- event listeners
- CSS imports and custom properties - (variables)