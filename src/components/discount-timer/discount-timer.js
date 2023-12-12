import './discount-timer.scss';

const daysElement = document.querySelector('.discount-timer__days');
const hoursElement = document.querySelector('.discount-timer__hours');
const minutesElement = document.querySelector('.discount-timer__minutes');
const secondsElement = document.querySelector('.discount-timer__seconds');

const finishDiscountDate = new Date('2023-12-31T20:00:00');

let timerId = null;

const updateDiscountDate = () => {
    const currentDate = new Date().valueOf();
    const finishMs = finishDiscountDate.valueOf();
    const ms = finishMs - currentDate;

    const days = Math.floor(ms / (1000 * 60 * 60 * 24) % 30);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    if (currentDate < finishMs) {
        daysElement.textContent = days < 10 ? `0${days}` : days;
        hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
        minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    } else {
        clearInterval(timerId)
    }
}

timerId = setInterval(updateDiscountDate, 1000)