// Listen for Submit
document
  .getElementById("calc-form")
  .addEventListener("submit", function(e){
    // Hide Results
    document.getElementById('results').style.display = 'none';
    
    // Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
  });

document.getElementById("calc-form").addEventListener("input", disableInput);

// Calculate Results
function calculateResults() {
  console.log("Calculating...");

  // UI Vars
  const dollar = document.getElementById("dollar-amount");
  const won = document.getElementById("won-amount");
  const dollarConvert = document.getElementById("dollar-convert");
  const wonConvert = document.getElementById("won-convert");

  const inputDollar = parseFloat(dollar.value);
  const inputWon = parseFloat(won.value);

  // Computes Conversion
  const dollarResult = inputDollar * 1192.98;
  const wonResult = inputWon * 0.00084;

  // Shows Results of Conversion
  if (isFinite(dollarResult)) {
    dollarConvert.value = inputDollar.toFixed(2);
    wonConvert.value = dollarResult.toFixed(2);

    // Displays Results
    document.getElementById('results').style.display = 'block';

    // Hides Loader
    document.getElementById('loading').style.display = 'none';

    // dollar.value = 0;

  } else if (isFinite(wonResult)) {
    dollarConvert.value = wonResult.toFixed(2);
    wonConvert.value = inputWon.toFixed(2);

    // Displays Results
    document.getElementById('results').style.display = 'block';

    // Hides Loader
    document.getElementById('loading').style.display = 'none';

    // won.value = 0;

  } else {
    showError('Please check your numbers.');

    // Hides Loader
    document.getElementById('loading').style.display = 'none';
  }
}

// Show Error
function showError(error) {
    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear Error Alert
function clearError() {
    document.querySelector('.alert').remove();
}

// Disable Input
function disableInput(e) {
  e.preventDefault();

  // Disables Won If Dollar Is Being Used
  if (document.getElementById("dollar-amount").value > 0) {
    document.getElementById("won-amount").disabled = true;
  } else {
    document.getElementById("won-amount").disabled = false;
  }

  // Disables Dollar If Won Is Being Used
  if (document.getElementById("won-amount").value > 0) {
    document.getElementById("dollar-amount").disabled = true;
  } else {
    document.getElementById("dollar-amount").disabled = false;
  }
}
