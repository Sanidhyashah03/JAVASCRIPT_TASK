let Input = '';


function appendToDisplay(value) {
    Input += value;
    document.getElementById("display").value = Input;
}

function clearDisplay() {
    Input = '';
    document.getElementById("display").value = '';
}

function calculateResult() {
    try {
        let result = new Function('return ' + Input)();
        document.getElementById("display").value = result;
        Input = result.toString();  
    } catch (error) {
        document.getElementById("display").value = 'Error';
            Input = '';
    }
}