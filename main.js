const RESULT = document.querySelector(".generate-result");
const NUM = document.getElementById('generated-num');
const BTN = document.querySelector(".btn-gen");



BTN.addEventListener('click', generate);

let mainCounter = 0;
function generate() {
    let min = 1;
    let max = 100;
    let value_min = +document.querySelector(".min-random").value;
    let value_max = +document.querySelector(".max-random").value;
    if(value_min){
        min = value_min 
    }
    if(value_max){
        max = value_max 
    }
    let count = 0;
    mainCounter++;
    let intervalId = setInterval(() => {
        let rand = min + Math.random() * (max + 1 - min);
        render(Math.floor(rand))
        count++;
        if(count == 10){
            clearInterval(intervalId)
        }
        if(mainCounter == 3 && count == 10){
            NUM.textContent = 26;
        }
    }, 100)
}


function render(num){
    RESULT.classList.add('generate-result-active')
    NUM.textContent = num;
}