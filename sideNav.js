// Add this to your about.js file (near the top with your other variables)
let contentVisible = false; // Track whether content is visible

// Add this function to your about.js file
function toggleContent() {
  contentVisible = !contentVisible; // Toggle the state
  
  // Get all the pane elements
  const panes = document.querySelectorAll('.sidebar-nav');
  
  // Show or hide based on current state
  if (contentVisible) {
    // Show all panes
    panes.forEach(pane => {
      pane.style.opacity = '1';
      pane.style.pointerEvents = 'auto';
    });
  } else {
    // Hide all panes
    panes.forEach(pane => {
      pane.style.opacity = '0';
      pane.style.pointerEvents = 'none';
    });
  }
}

// Add this to your setup function or at the end of your file
document.addEventListener('DOMContentLoaded', function() {
  // Initially hide all panes
  const panes = document.querySelectorAll('.sidebar-nav');
  panes.forEach(pane => {
    pane.style.opacity = '0';
    pane.style.pointerEvents = 'none';
    pane.style.transition = 'opacity 0.5s ease';
  });
  
  // Add click event to the entire document
  document.addEventListener('click', toggleContent);
});