function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if (pinStr.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad'), addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-num');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const perCalc = calcInput.value;
        const newCalc = perCalc + number;
        calcInput.value = newCalc;
    }


});