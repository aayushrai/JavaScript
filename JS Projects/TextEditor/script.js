const textInputTag = document.getElementById('text-input')
const textOutputTag = document.getElementById('text-output')

textInputTag.onkeyup = function(){
    textOutputTag.innerText = textInputTag.value;
    console.log(
        textInputTag.value
    );
}

function makeBold(ele){
    ele.classList.toggle("active");
    textOutputTag.classList.toggle("bold");
}

function makeItalic(ele){
    ele.classList.toggle("active");
    textOutputTag.classList.toggle("italic");
}

function makeUnderline(ele){
    ele.classList.toggle("active");
    textOutputTag.classList.toggle("underline");
}

function makeUnderline(ele){
    ele.classList.toggle("active");
    textOutputTag.classList.toggle("underline");
}

function align(ele,alignType){
    textOutputTag.style.textAlign = alignType;
    buttonList = document.getElementsByClassName("align");
    Array.from(buttonList).forEach((btn)=> {btn.classList.remove('active')});
    ele.classList.add("active");
}