// returns HTML string of giphy object
export const GiphyHTML = (giphyObj) => {
    return `
    <div class="giphy__wrapper">
        <img src="${giphyObj.images.fixed_width.url}" alt="${giphyObj.title}"
    </div>
    `
}