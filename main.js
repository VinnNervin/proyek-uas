const imgaeContainer = document.querySelectorAll(".img")
const body = document.querySelector("header")
imgaeContainer.forEach((item) => {
    item.addEventListener("click", () => {
        const div = document.createElement("div")
        const img = document.createElement('img')
        img.src = item.children[0].src
        div.classList.add("overlay")
        div.appendChild(img)
        body.appendChild(div)
        console.log('wkwkk');

        div.addEventListener('click', () => {
            body.removeChild(div)
        })
    })
})
console.log(body);