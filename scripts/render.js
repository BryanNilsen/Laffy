
// Renders html representation to element with specified ID
export const render = (html, elementId) => {
    const element = document.getElementById(elementId)
    element.innerHTML = html
}