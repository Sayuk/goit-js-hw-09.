import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const day = document.querySelector('.days');
const clockSeconds = document.querySelector('.hours');
const clockMinutes = document.querySelector('.minutes');
const clockHours = document.querySelector('.seconds');

const buttonStart = document.querySelector('.start');


buttonStart.addEventListener('click', () => {
    setInterval(() => {
        const endDate = new Date('December 31, 2022 23:59:59');

        const currentDate = new Date();
        const difTime = endDate - currentDate;
        console.log(difTime);
    }, 1000)
});