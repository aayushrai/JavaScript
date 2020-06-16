img = document.querySelector("img")
img.addEventListener("click",imgCoor);

function imgCoor(e){
    console.log(e);
    console.log(e.offsetX);
};