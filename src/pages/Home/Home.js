const startBtn = document.getElementById('startBtn');
let isColor1 = true;


const blinkingStart = () => {
    setInterval(() => {
    startBtn.style.color = isColor1 ? 'white' : 'blue';
    isColor1 = !isColor1;
}, 1000);
}

blinkingStart();

