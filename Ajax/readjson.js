document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.response);
            const user = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Company: ${user.company}</li>
                <li>Number: ${user.number}</li>
            </ul>
            `;
            document.getElementById("customer").innerHTML = output;

        }
    }
    xhr.send();

}



function loadCustomers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.response);
            const users = JSON.parse(this.responseText);
            let output = "";
            users.forEach(function(user) {
                output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Company: ${user.company}</li>
                <li>Number: ${user.number}</li>
            </ul>
            `;

            });
            document.getElementById("customers").innerHTML = output;

        }
    }
    xhr.send();

}