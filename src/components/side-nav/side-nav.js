import './side-nav.scss'

const sidenavTrigger = document.querySelector('.sidenav-trigger');

const sideNav = document.querySelector('.side-nav');
const overlay = document.querySelector('.side-nav__overlay');
const closeIcon = document.querySelector('.side-nav__close-icon');

const KEYBOARD_KEYS = {
    escape: 'Escape'
}

const openSideNav = (evt) => {
    evt.preventDefault();
    sideNav.classList.add('side-nav--active')
}

const closeSideNav = (evt) => {
    if (evt.code === KEYBOARD_KEYS.escape || !evt.code) {
        sideNav.classList.remove('side-nav--active')
    }
}


sidenavTrigger.addEventListener('click', openSideNav);
overlay.addEventListener('click', closeSideNav);
closeIcon.addEventListener('click', closeSideNav);
window.addEventListener('keydown', closeSideNav)