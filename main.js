const image = document.querySelectorAll(".img")
const header = document.querySelector("header")
const submitBtn = document.querySelector("form button")

image.forEach((item) => {
    item.addEventListener("click", () => {
        const div = document.createElement("div")
        const img = document.createElement('img')
        img.src = item.children[0].src
        div.classList.add("overlay")
        div.appendChild(img)
        header.appendChild(div)
        div.addEventListener('click', () => {
            header.removeChild(div)
        })
    })
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
})