const section = document.querySelector("section");

let aimX = 0.5
let aimY = 0.5
let currentX = 0.5
let currentY = 0.5
let animationId = null
let isPanEnabled = true

// Check if screen size allows panning
const checkScreenSize = () => {
    const shouldEnable = window.innerWidth >= 440
    if (shouldEnable !== isPanEnabled) {
        isPanEnabled = shouldEnable
        if (isPanEnabled) {
            // Re-enable panning
            document.addEventListener("mousemove", move)
            tween()
        } else {
            // Disable panning
            document.removeEventListener("mousemove", move)
            if (animationId) {
                cancelAnimationFrame(animationId)
                animationId = null
            }
            // Reset position
            section.style.transform = 'translate(0px, 0px)'
        }
    }
}

const move = (event) => {
    if (!isPanEnabled) return
    aimX = event.pageX / window.innerWidth
    aimY = event.pageY / window.innerHeight
}

const tween = (event) => {
    if (!isPanEnabled) return
    
    currentX = currentX + (aimX - currentX) * 0.02
    currentY = currentY + (aimY - currentY) * 0.02

    const sx = section.clientWidth - window.innerWidth
    const sy = section.clientHeight - window.innerHeight

   section.style.transform = `translate(${-1 * sx * currentX}px, ${-1 * sy * currentY}px)`

   animationId = requestAnimationFrame(tween)
}

// Initial setup
checkScreenSize()

// Listen for window resize
window.addEventListener('resize', checkScreenSize)

// Only start if panning is enabled
if (isPanEnabled) {
    tween()
    document.addEventListener("mousemove", move)
}