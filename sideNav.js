
let contentVisible = false; // Track whether content is visible


function toggleContent() {
  console.log("toggleContent");
  contentVisible = !contentVisible; // Toggle the state
  
  // Get all the pane elements
  const panes = document.querySelectorAll('.sidebar-nav');
  
  // Show or hide based on current state
  if (contentVisible) {

    panes.forEach(pane => {
      pane.style.opacity = '1';
      pane.style.pointerEvents = 'auto';
    });
  } else {

    panes.forEach(pane => {
      pane.style.opacity = '0';
      pane.style.pointerEvents = 'none';
    });
  }
}




document.addEventListener('DOMContentLoaded', function() {
  // Initially hide all panes
  const panes = document.querySelectorAll('.sidebar-nav');
  panes.forEach(pane => {
    pane.style.opacity = '0';
    pane.style.pointerEvents = 'none';
    pane.style.transition = 'opacity 0.5s ease';
  });
  

  document.addEventListener('click', toggleContent);
});



