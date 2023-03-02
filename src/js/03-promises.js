import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  inputDelayEl: document.querySelector('input[name = delay]'),
  inputStepEl: document.querySelector('input[name = step]'),
  inputAmountEl: document.querySelector('input[name = amount]'),
}

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  let delayValue = Number(refs.inputDelayEl.value);
  const stepValue = Number(refs.inputStepEl.value);
  const amountValue = Number(refs.inputAmountEl.value);
  
  for (let i = 1; i <= amountValue; i += 1){
    createPromise (i, delayValue)
    .then(({position, delay})=>{
      Notify.success(`Fulfilled ${position} promise ${delay}ms`);
      console.log(`Fulfilled ${position} promise ${delay}ms`);    
    })
    .catch(({position, delay})=>{
      Notify.failure(`Rejected ${position} promise ${delay}ms`);
      console.log(`Rejected ${position} promise ${delay}ms`);
    });
  delayValue += stepValue;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (shouldResolve) {
        resolve({position, delay});
        // Fulfill
      } else {
        reject({position,delay});
        // Reject
      }
    }, delay);
  });
};
