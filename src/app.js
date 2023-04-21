const menuBtn = document.querySelector('.burger-menu')
const menuIcon = document.querySelector('.burger-menu').children
menuBtn.addEventListener('click', () => {
    menuIcon[0].classList.toggle('rotateX')
    menuIcon[1].classList.toggle('rotateY')
})