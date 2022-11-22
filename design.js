document.getElementById('generate-pin').addEventListener('click',function(){
    const scr = document.getElementById('scrn');
    const pinNumber = generateRandomNumber();
     scr.value = pinNumber;
});

document.getElementById('active-button').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('scrn2');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number == 'C'){
            typedNumberField.value = '';
        }
        else if (number == '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
    
})

document.getElementById('submit-button').addEventListener('click',function(){
    const pin_number = document.getElementById('scrn');
    const pin1 = pin_number.value;
    const button_pin = document.getElementById('scrn2');
    const pin2 = button_pin.value;
    
    
    if(pin1 == pin2){
        document.getElementById("match").style.display = 'block'
    }
    else{
        document.getElementById("dont-match").style.display = 'block'
    }
})

function generateRandomNumber() {
        var minimum = 100000;
        var maximum = 999999;
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

