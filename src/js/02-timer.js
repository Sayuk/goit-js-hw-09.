import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';


const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerDiv = document.querySelector('.timer');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minEl = document.querySelector('span[data-minutes]');
const secEl = document.querySelector('span[data-seconds]');

btnStart.classList.add('disabled');
let userDate = null;



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}


function pad(value) {
    return String(value).padStart(2, '0');
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);

        if(selectedDates[0] < Date.now()) {
           window.alert('Please choose a date in the future');
            userDate = new Date();
        } else { 
            btnStart.disabled = false;
            btnStart.classList.remove('disabled');
            userDate = selectedDates[0];
        }
    },
};



class Timer  {
    constructor() {
        this.isActive = false;
        this.timerId = null;
        btnStart.disabled = true;
    }
    timerStart() {
        if (this.isActive) {
            return;
        }
    this.isActive = true;
    this.timerId = setInterval(()=> {
        const currentTime = Date.now();
        const deltaTime = userDate - currentTime;
        const components = convertMs(deltaTime);

                secEl.textContent = components.seconds;
                minEl.textContent = components.minutes;
                hoursEl.textContent = components.hours;
                daysEl.textContent = components.days;
        if (deltaTime < 1000) {
                  window.alert('таймер всьо');
                  clearInterval(this.timerId);
                  
    }
    }, 1000)

    }
    timerStop() {
         clearInterval(this.timerId);
        
    }
}

    const timer = new Timer();
    flatpickr(input, options);
    btnStart.addEventListener('click', () => timer.timerStart());