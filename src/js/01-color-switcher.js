const startFon = document.querySelector('.start');
const stopFon = document.querySelector('.stop');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let changeFon = [];
startFon.disabled = false;
stopFon.disabled = true;
     


startFon.addEventListener('click', () => {
    changeFon = setInterval(() => {
    document.body.style.background = getRandomHexColor();

    
    }, 1000);
    startFon.disabled = true;
     stopFon.disabled = false;
});


stopFon.addEventListener('click', () => {
    clearInterval(changeFon);
     startFon.disabled = false;
     stopFon.disabled = true;
});





