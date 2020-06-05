const firstName1 = "Aayush";
const lastName1 = "Rai";
const str = "hii this is me"
let vall;
//concatination
vall = firstName1 + lastName1;
vall = firstName1 + " " + lastName1;

//append
vall = "brad ";
vall += "hey";
vall = "hii this is " +firstName1 +" my age is " +age;// age is define in other js file and it convert int into string automatically 
// Escaping 
vall = 'that\'s is awesome, i can\'t wait'

// lenght
vall = firstName1.length;

// concat()
vall = firstName1.concat(" ",lastName1)

// change case
vall = firstName1.toUpperCase()
vall = firstName1.toLowerCase()

vall = firstName1[2];

// indexOf
vall = firstName1.indexOf("u");
vall = firstName1.lastIndexOf("a");

// charAt
vall = firstName1.charAt(4);


//substring()
vall = firstName1.substring(0,3);

//slice()
vall = firstName1.slice(0,4);
vall = firstName1.slice(-3);

vall = str.split(" ");

//replace
vall = str.replace("hii","hey");
console.log(vall);