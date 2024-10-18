// Functionality for toggling traffic lights
document.getElementById('toggleLights').addEventListener('click', function() {
    // Accessing the three lights
    const redLight = document.querySelector('.light.red');
    const yellowLight = document.querySelector('.light.yellow');
    const greenLight = document.querySelector('.light.green');

    // Logic to toggle between the lights
    if (greenLight.classList.contains('active')) {
        greenLight.classList.remove('active');
        yellowLight.classList.add('active');
    } else if (yellowLight.classList.contains('active')) {
        yellowLight.classList.remove('active');
        redLight.classList.add('active');
    } else if (redLight.classList.contains('active')) {
        redLight.classList.remove('active');
        greenLight.classList.add('active');
    }
});
