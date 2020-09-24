 
class Beat{
    constructor(audio_src){
        this.audio = new Audio(audio_src); 
    }
    play = () =>{
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

class Button{
    constructor(color,keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColor();
        this.transitionEnd();
    }
    
    setButtonColor = () =>{
       this.element.style.borderColor = this.color;
    }
    transitionEnd = () => {
        document.addEventListener("transitionend",this.deselect);
    }
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }
    deselect = () => {
        this.element.style.backgroundColor = "transparent" ;//  default value
        this.element.style.boxShadow = "none";
    }
}