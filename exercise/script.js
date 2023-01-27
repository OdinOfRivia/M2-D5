const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
]

const img = document.querySelector('img')

window.addEventListener("DOMContentLoaded", () => {
    img.src = images[0]
})