const dropDown = document.querySelector('.dropdownMenu');
const dropOptions = document.querySelector('.drop-options')
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.bx');

toggle.addEventListener('click', e => {
    document.body.classList.toggle ('dark-mode');
    toggle.classList.toggle('dark-mode')
    icon.classList.toggle('bxs-moon');
})

dropDown.addEventListener('click', e => {
    dropOptions.classList.toggle('show-options')
})