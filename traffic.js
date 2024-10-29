// Selecting the traffic light elements for red, yellow, and green
const redLight = document.querySelector('.light.red');
const yellowLight = document.querySelector('.light.yellow');
const greenLight = document.querySelector('.light.green');

// Selecting the buttons for toggling and resetting the lights
const toggleButton = document.getElementById('toggleLights');
const resetButton = document.getElementById('resetLights');

// Initializing a variable to track the current active light
let activeLight = 'green'; // Green starts as active by default

// Function to activate a light based on color and deactivate others
function activateLight(lightColor) {
    // Remove 'active' class from all lights to deactivate
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
    
    // Add 'active' class to the specified light
    switch (lightColor) {
        case 'red':
            redLight.classList.add('active');
            activeLight = 'red';
            break;
        case 'yellow':
            yellowLight.classList.add('active');
            activeLight = 'yellow';
            break;
        case 'green':
            greenLight.classList.add('active');
            activeLight = 'green';
            break;
        default:
            console.error('Invalid light color');
    }
}

// Function to toggle the lights in the order: Green -> Yellow -> Red -> Green
function toggleTrafficLights() {
    switch (activeLight) {
        case 'green':
            activateLight('yellow');
            break;
        case 'yellow':
            activateLight('red');
            break;
        case 'red':
            activateLight('green');
            break;
        default:
            console.error('Unknown active light');
    }
}

// Event listener for toggling lights on button click
toggleButton.addEventListener('click', function () {
    toggleTrafficLights(); // Call the toggle function
});

// Function to reset the lights to the initial state
function resetLights() {
    // Reset active light to green
    activateLight('green');
    console.log('Traffic lights reset to initial state');
}

// Event listener for resetting lights on button click
resetButton.addEventListener('click', function () {
    resetLights();
});

// Optional: Automatic cycling functionality (toggle every few seconds)
let autoToggle;
function startAutoToggle(interval = 2000) {
    autoToggle = setInterval(toggleTrafficLights, interval);
    console.log('Auto-toggle started');
}

// Function to stop the automatic toggle
function stopAutoToggle() {
    clearInterval(autoToggle);
    console.log('Auto-toggle stopped');
}

// Event listener to start/stop auto-toggle on button click
let isAutoToggleOn = false;
document.getElementById('autoToggleButton').addEventListener('click', function () {
    if (isAutoToggleOn) {
        stopAutoToggle();
    } else {
        startAutoToggle();
    }
    isAutoToggleOn = !isAutoToggleOn; // Toggle the state
});

// Initialize the lights to start with green light active
resetLights();
