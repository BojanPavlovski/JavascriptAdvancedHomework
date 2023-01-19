let colorParagraph = document.getElementById("color");
function setBackgroundColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    
    colorParagraph.innerText = randomColor;
}
setBackgroundColor();