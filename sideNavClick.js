const sidebar = document.querySelector('.bottom-sidebar');
const content = document.getElementById('sidebar-nav');

sidebar.addEventListener('click', function() {
    console.log('clicked');
   
    if (content.classList.contains('hidden')) {
        content.style.opacity = '1';
        content.classList.remove('hidden');
        
    } else {
        content.style.opacity = '0';
        content.classList.add('hidden');
    }
})