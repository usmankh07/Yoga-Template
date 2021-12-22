const navbar = document.querySelector('.pages');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click',function open() {
    navbar.style.right = '0%'
})

close.addEventListener('click', function close() {
    navbar.style.right = '-200%'
})


// Modal making
const envelope = document.querySelector('.envelope')
const modal = document.querySelector('.modal');
const send = document.querySelector('.send')
const remove = document.querySelector('.remove')


envelope.addEventListener('click', function () {
    modal.style.opacity = "100%"
})

remove.addEventListener('click', function () {
    modal.style.opacity = "0%"
})
send.addEventListener('click', function() {
    modal.style.opacity = '0%'
})