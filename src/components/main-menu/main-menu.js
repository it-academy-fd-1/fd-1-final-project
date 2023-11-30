import './main-menu.scss';

const currencyList = document.querySelector('.main-menu__currency-list');
const currencyActive = document.querySelector('.main-menu__currency-item--active');

const shipList = document.querySelector('.main-menu__ship-list');
const shipActive = document.querySelector('.main-menu__ship-option-img--active');

const onChangeCurrency = (evt) => {
    if (evt.target.closest('.main-menu__currency-item')) {
        const [language] = currencyActive.textContent.split(',')
        currencyActive.textContent = `${language}, ${evt.target.textContent}`
    }
}


const onChangeShipTo = (evt) => {
    if (evt.target.closest('.main-menu__ship-option-img')) {
        const img = evt.target.getAttribute('src');
        shipActive.setAttribute('src', img)
    }
}

currencyList.addEventListener('click', onChangeCurrency)
shipList.addEventListener('click', onChangeShipTo)