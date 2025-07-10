const mobileNav = document.querySelector('.logo-nav');
const mobileContent = document.getElementById('mobile-nav');

mobileNav.addEventListener('click', function() {
    console.log('mobile clicked');

    if (mobileContent.classList.contains('hidden')) {
        mobileContent.style.opacity = '1';
        mobileContent.classList.remove('hidden');
        mobileContent.classList.remove('disabled');
        console.log('opacity 1')
        console.log(mobileContent.classList.value);
    } else {
        mobileContent.classList.add('disabled');
        mobileContent.style.opacity = '0';
        mobileContent.classList.add('hidden');
        console.log('opacity 0')
        console.log(mobileContent.classList.value);
    }
})