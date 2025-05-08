const title = document.querySelector("h1")
const links = document.querySelectorAll("section a")
const subtitle = document.querySelector("p")

const body = document.querySelector("body")

links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        title.innerText = link.getAttribute("data-title")

        subtitle.innerText = link.getAttribute("data-subtitle")

        body.classList.add("hovered")
        link.classList.add("hovered")

        body.classList.add(link.getAttribute("data-color"))
    })

    link.addEventListener("mouseleave", () => {
        
        title.innerText = "WONT YOU STAY AWHILE?"
        subtitle.innerText = ""

        body.classList.remove("hovered")
        link.classList.remove("hovered")

        body.classList.remove(link.getAttribute("data-color"))
    })
})