const title = document.querySelector("h1")
const links = document.querySelectorAll("section a")
const subtitle = document.querySelector("p")

const body = document.querySelector("body")

let isTitlesEnabled = true
let linkEventListeners = []

// Check if screen size allows title interactions
const checkScreenSize = () => {
    const shouldEnable = window.innerWidth > 425
    if (shouldEnable !== isTitlesEnabled) {
        isTitlesEnabled = shouldEnable
        if (isTitlesEnabled) {
            // Re-enable title interactions
            enableTitleInteractions()
        } else {
            // Disable title interactions
            disableTitleInteractions()
        }
    }
}

const enableTitleInteractions = () => {
    links.forEach((link) => {
        const mouseenterHandler = () => {
            title.innerText = link.getAttribute("data-title")
            subtitle.innerText = link.getAttribute("data-subtitle")
            body.classList.add("hovered")
            link.classList.add("hovered")
            body.classList.add(link.getAttribute("data-color"))
        }

        const mouseleaveHandler = () => {
            title.innerText = "WONT YOU STAY AWHILE?"
            subtitle.innerText = ""
            body.classList.remove("hovered")
            link.classList.remove("hovered")
            body.classList.remove(link.getAttribute("data-color"))
        }

        link.addEventListener("mouseenter", mouseenterHandler)
        link.addEventListener("mouseleave", mouseleaveHandler)

        // Store references for removal
        linkEventListeners.push({
            element: link,
            mouseenter: mouseenterHandler,
            mouseleave: mouseleaveHandler
        })
    })
}

const disableTitleInteractions = () => {
    // Remove all event listeners
    linkEventListeners.forEach(({ element, mouseenter, mouseleave }) => {
        element.removeEventListener("mouseenter", mouseenter)
        element.removeEventListener("mouseleave", mouseleave)
    })
    linkEventListeners = []

    // Reset title and subtitle to default
    title.innerText = "WONT YOU STAY AWHILE?"
    subtitle.innerText = ""
    body.classList.remove("hovered")
    links.forEach(link => link.classList.remove("hovered"))
    
    // Remove any color classes
    const colorClasses = Array.from(links).map(link => link.getAttribute("data-color")).filter(Boolean)
    colorClasses.forEach(colorClass => body.classList.remove(colorClass))
}

// Initial setup
checkScreenSize()

// Listen for window resize
window.addEventListener('resize', checkScreenSize)

// Only enable if screen size allows
if (isTitlesEnabled) {
    enableTitleInteractions()
}