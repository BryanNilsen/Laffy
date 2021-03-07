// returns HTML string of joke object
export const JokeHTML = (jokeObj) => {
    return `
    <div class="joke__wrapper">
        ${jokeObj.joke}
    </div>
    `
}