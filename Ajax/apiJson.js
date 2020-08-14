document.querySelector(".get-jokes").addEventListener("click", loadJokes);

function loadJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function() {
        if (this.status === 200) {
            // const response = this.responseText;
            jokes = JSON.parse(this.responseText);
            output = "<ul>"
            jokes.value.forEach(function(joke) {
                console.log(joke.joke)
                output += `
                <li>${joke.joke}</li>
                `
            });
            output += "</ul>"
            document.getElementById("jokes").innerHTML = output;
        }

    }
    xhr.send();
    e.preventDefault();
}