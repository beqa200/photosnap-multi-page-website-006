const menuBtn = document.querySelector('.burger-menu-icon')
const nav = document.querySelector('nav')
const menuIcon = document.querySelector('.burger-menu-icon').children
const featuresBox = document.querySelector('.features-box')
menuBtn.addEventListener('click', () => {
    menuIcon[0].classList.toggle('rotateX')
    menuIcon[1].classList.toggle('rotateY')
    nav.classList.toggle('is-active')
})