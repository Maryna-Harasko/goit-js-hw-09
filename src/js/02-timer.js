import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  min: document.querySelector('[data-minutes]'),
  sec: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

let selectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const currentDay = Date.now();
        const selectedDate = selectedDates[0].getTime();
        let timerTime = selectedDate - currentDay;
        console.log(selectedDate);
        if(timerTime <= 0){
          Notify.failure("Please choose a date in the future");
          console.log(refs.startBtn.disabled)
        }
        else{
          refs.startBtn.disabled = false;
          refs.startBtn.addEventListener('click', startTimer);
        }
    },
  };

flatpickr(refs.input, options);

function startTimer(){
  refs.startBtn.disabled = true;
  const currentTime = Date.now();
  let delta = selectedDate - currentTime;
    const timerId = setInterval(() => {
      if (delta > 1000){
        delta -= 1000;
        const timeObj = convertMs(delta);
        timerStart(timeObj); 
      }
     else {
      clearInterval(timerId);
     }
    }, 1000)
  }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timerStart({ days, hours, minutes, seconds }) {
  refs.days.textContent = pad(days);
  refs.hours.textContent = pad(hours);
  refs.min.textContent = pad(minutes);
  refs.sec.textContent = pad(seconds);
}

function pad(value) {
  return String(value).padStart(2, '0');
}