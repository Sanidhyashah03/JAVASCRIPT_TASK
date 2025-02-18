document.addEventListener("DOMContentLoaded", function () {

    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');

    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    const colorBox = document.getElementById('colorDisplay');
    const randomButton = document.getElementById('randomColorBtn');

   
    function updateColorDisplay() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    function setRandomColor() {
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);

        redSlider.value = randomRed;
        greenSlider.value = randomGreen;
        blueSlider.value = randomBlue;

        updateColorDisplay();
    }

    redSlider.addEventListener('input', updateColorDisplay);
    greenSlider.addEventListener('input', updateColorDisplay);
    blueSlider.addEventListener('input', updateColorDisplay);

    randomButton.addEventListener('click', setRandomColor);

    updateColorDisplay();
});
