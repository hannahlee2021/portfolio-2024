const sidebar = document.querySelector('.bottom-sidebar');
const content = document.getElementById('sidebar-nav');
const mobileNav = document.querySelector('.logo-nav');
const mobileContent = document.getElementById('mobile-nav');

sidebar.addEventListener('click', function() {
    console.log('clicked');
   
    if (content.classList.contains('hidden')) {
        content.style.opacity = '1';
        content.classList.remove('hidden');
        console.log('side opacity 1')
        
    } else {
        content.style.opacity = '0';
        content.classList.add('hidden');
        console.log('side opacity 0')
    }
})

mobileNav.addEventListener('click', function() {
    console.log('mobile clicked');

    if (mobileContent.classList.contains('hidden')) {
        mobileContent.style.opacity = '1';
        mobileContent.classList.remove('hidden');

        console.log('opacity 1')
    } else {
        mobileContent.style.opacity = '0';
        mobileContent.classList.add('hidden');
        console.log('opacity 0')
    }
})