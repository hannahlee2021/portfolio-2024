const title = document.querySelector("h1")
const links = document.querySelectorAll("section a")

const body = document.querySelector("body")

links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        title.innerText = link.getAttribute("data-title")

        body.classList.add("hovered")
        link.classList.add("hovered")

        body.classList.add(link.getAttribute("data-color"))
    })

    link.addEventListener("mouseleave", () => {
        
        title.innerText = "WONT YOU STAY AWHILE?"

        
        

        body.classList.remove("hovered")
        link.classList.remove("hovered")

        body.classList.remove(link.getAttribute("data-color"))
    })
})