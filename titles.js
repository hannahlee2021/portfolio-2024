const title = document.querySelector("#title-1")
const links = document.querySelectorAll("section a")
const subtitle = document.querySelector("#subtitle-1")

const body = document.querySelector("body")

// Debug: Check if elements are found
console.log("Title element:", title)
console.log("Links found:", links.length)
console.log("Subtitle element:", subtitle)
console.log("Body element:", body)

let isTitlesEnabled = true
let linkEventListeners = []

// Check if screen size allows title interactions
const checkTitlesScreenSize = () => {
    const shouldEnable = window.innerWidth >= 440
    console.log(`Screen width: ${window.innerWidth}, Should enable: ${shouldEnable}, Currently enabled: ${isTitlesEnabled}`)
    
    if (shouldEnable !== isTitlesEnabled) {
        isTitlesEnabled = shouldEnable
        if (isTitlesEnabled) {
            console.log("Re-enabling title interactions")
            // Re-enable title interactions
            enableTitleInteractions()
        } else {
            console.log("Disabling title interactions")
            // Disable title interactions
            disableTitleInteractions()
        }
    }
}

const enableTitleInteractions = () => {
    console.log("enableTitleInteractions called")
    // Clear existing listeners first to prevent duplicates
    disableTitleInteractions()
    
    links.forEach((link, index) => {
        console.log(`Setting up listeners for link ${index}:`, link)
        
        const mouseenterHandler = () => {
            console.log("Mouse enter triggered for:", link.getAttribute("data-title"))
            title.innerText = link.getAttribute("data-title")
            subtitle.innerText = link.getAttribute("data-subtitle")
            body.classList.add("hovered")
            link.classList.add("hovered")
            body.classList.add(link.getAttribute("data-color"))
        }

        const mouseleaveHandler = () => {
            console.log("Mouse leave triggered")
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
    
    console.log("Event listeners added:", linkEventListeners.length)
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
checkTitlesScreenSize()

// Listen for window resize
window.addEventListener('resize', checkTitlesScreenSize)

// Only enable if screen size allows
if (isTitlesEnabled) {
    enableTitleInteractions()
}