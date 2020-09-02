function randomNumberGenerator() {
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}
answer = randomNumberGenerator();
document.getElementById("check").onclick = function() {
    const guess = document.getElementById("guess");
    const result = document.getElementById("result");
    const hist = document.getElementById("hist");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item" //bootstrap list
    listItem.innerHTML = `Your guessed ${guess.value}`
    hist.appendChild(listItem);

    if (answer > guess.value) {
        result.innerHTML = "<div class='alert alert-warning' role='alert'>To Less</div>";
    } else if (answer < guess.value) {
        result.innerHTML = "<div class='alert alert-warning' role='alert'>To Greater</div>";
    } else {
        result.innerHTML = "<div class='alert alert-success' role='alert'>Correct Guess</div>";
    }
    guess.value = "";
};

document.getElementById("reset").onclick = function() {
    const guess = document.getElementById("guess");
    const result = document.getElementById("result");
    const hist = document.getElementById("hist");

    hist.innerHTML = "";
    result.innerHTML = "";
    answer = randomNumberGenerator();
};