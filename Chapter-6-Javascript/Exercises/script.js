// Get elements from the DOM
const petrolCostInput = document.getElementById('petrolCost');
const litersInput = document.getElementById('liters');
const calculateButton = document.getElementById('calculateButton');
const totalCostDisplay = document.getElementById('totalCost');

// Set default values
petrolCostInput.value = '1.72';
litersInput.value = '0';

// Add event listener to the calculate button
calculateButton.addEventListener('click', function() {
    const petrolCost = parseFloat(petrolCostInput.value);
    const liters = parseFloat(litersInput.value);

    // Calculate total cost
    const totalCost = petrolCost * liters;

    // Display total cost
    totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});
