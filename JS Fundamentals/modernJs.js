const name2 = "aayush rai";
const job = "Machine learning developer";
const city = "indore";

//Without template string (es5)
html = "<ul></ul>" +
       "<li>Name: "+ name2 + "</li>" +
       "<li>Job: "+ job + "</li>" +
       "<li>City: "+ city + "</li>" ;

function hello(){
    return 'hello';
}
//With template string (es6)
html = `
    <ul>
       <li>Name: ${name}</li>
       <li>Name: ${job}</li>
       <li>Name: ${city}</li>
       <li>${5 +6}</li>
       <li>${hello()}</li>
       <li>${city == 'indore'?"Near":"far"}</li>
    </ul>
 `;
document.body.innerHTML = html