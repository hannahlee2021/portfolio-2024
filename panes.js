const panes = document.querySelectorAll('.pane')

let z = 1
let isPanesEnabled = true

// Check if screen size allows pane interactions
const checkScreenSize = () => {
    const shouldEnable = window.innerWidth >= 440
    if (shouldEnable !== isPanesEnabled) {
        isPanesEnabled = shouldEnable
        if (isPanesEnabled) {
            // Re-enable pane interactions
            enablePaneInteractions()
        } else {
            // Disable pane interactions
            disablePaneInteractions()
        }
    }
}

const enablePaneInteractions = () => {
    panes.forEach((pane) => {
        const title = pane.querySelector('.title')
        const corner = pane.querySelector('.corner')

        pane.addEventListener('mousedown', () => {
            z = z + 1
            pane.style.zIndex = z
        })

        title.addEventListener('mousedown', (event) => {
            pane.classList.add('is-dragging')

            let l = pane.offsetLeft
            let t = pane.offsetTop

            let startX = event.pageX
            let startY = event.pageY

            const drag = (event) => {
                event.preventDefault()

                pane.style.left = l + (event.pageX - startX) + 'px'
                pane.style.top = t + (event.pageY - startY) + 'px'
            }

            const mouseup = () => {
                pane.classList.remove('is-dragging')

                document.removeEventListener('mousemove', drag)
                document.removeEventListener('mouseup', mouseup)
            }

            document.addEventListener('mousemove', drag)
            document.addEventListener('mouseup', mouseup)
        })

        corner.addEventListener('mousedown', (event) => {
            let w = pane.clientWidth
            let h = pane.clientHeight

            let startX = event.pageX
            let startY = event.pageY

            const drag = (event) => {
                event.preventDefault()

                pane.style.width = w + (event.pageX - startX) + 'px'
                pane.style.height = h + (event.pageY - startY) + 'px'
            }

            const mouseup = () => {
                document.removeEventListener('mousemove', drag)
                document.removeEventListener('mouseup', mouseup)
            }

            document.addEventListener('mousemove', drag)
            document.addEventListener('mouseup', mouseup)
        })
    })
}

const disablePaneInteractions = () => {
    // Remove all event listeners by cloning and replacing elements
    panes.forEach((pane) => {
        const newPane = pane.cloneNode(true)
        pane.parentNode.replaceChild(newPane, pane)
    })
}

// Initial setup
checkScreenSize()

// Listen for window resize
window.addEventListener('resize', checkScreenSize)

// Only enable if screen size allows
if (isPanesEnabled) {
    enablePaneInteractions()
}
