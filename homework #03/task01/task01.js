let btn = document.getElementById("submitBtn");

let firstFunction = (resultHeader, colorInput) => {
    colorInput = document.getElementById("colorInput").value;
    resultHeader = document.getElementById("resultHeader");
    colorInput === "" ? resultHeader.style = "black" : resultHeader.style.color = `${colorInput}`;}
let secondFunction = (resultHeader, fontSizeInput) => {
    fontSizeInput = document.getElementById("fontSizeInput").value;
    resultHeader = document.getElementById("resultHeader");
    fontSizeInput === "" ? resultHeader.style.fontSize = `24px` : resultHeader.style.fontSize = `${fontSizeInput}px`;}

btn.addEventListener("click", function(){
    firstFunction();
    secondFunction();
})
    
