document.getElementById("loan-form").addEventListener("submit", results);

function results(e) {
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#results").style.display = "none";
    document.querySelector("#loading").style.display = "block";
    setTimeout(calculate, 2000);
    e.preventDefault();
}


function calculate(e) {
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.querySelector("#loading").style.display = "none";
        document.querySelector("#results").style.display = "block";
    } else {
        document.querySelector("#loading").style.display = "none";
        document.querySelector("#results").style.display = "none";
        showError("Please check your number");
    }

}

function showError(errorText) {
    div = document.createElement('div');
    div.className = 'alert alert-danger'
    div.textContent = errorText

    card = document.querySelector('.card');
    heading = document.querySelector('.heading');

    card.insertBefore(div, heading);
    setTimeout(function() { document.querySelector('.alert').remove() }, 3000)
}