const navbar = document.querySelector('.pages');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click',function open() {
    navbar.style.right = '0%'
})

close.addEventListener('click', function close() {
    navbar.style.right = '-200%'
})