let val;

val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.contentType;
val = document.characterSet;

val = document.forms;
val = document.forms[0];

val = document.links;
val = document.links[0].className;
val = document.scripts
val = document.scripts[2].getAttribute('src')
let scriptsCollection = document.scripts;
scriptsCollection = Array.from(scriptsCollection);

scriptsCollection.forEach(function(script){
 console.log(script);
});
console.log(val);