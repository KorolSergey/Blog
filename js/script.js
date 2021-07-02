const searchLink = document.querySelector('.search-link');
const searchBlock = document.querySelector('.header-search');
const searchClose = document.querySelector('.header-search-close');

searchLink.addEventListener('click', () => {
    searchBlock.style.display = 'block';
});

searchClose.addEventListener('click', () => {
    searchBlock.style.display = 'none';
});


const burgerBtn = document.querySelector('.header__burger-btn');
const menuContainer = document.querySelector('.header__menu-container');
const menuContent = document.querySelector('.header__menu-content');
const menuClose = document.querySelector('.header__menu-close');

burgerBtn.addEventListener('click', () => {
    menuContainer.classList.add('menu-active');
    menuContent.classList.add('menu-active');
});

menuClose.addEventListener('click', () => {
    menuContainer.classList.remove('menu-active');
    menuContent.classList.remove('menu-active');
});