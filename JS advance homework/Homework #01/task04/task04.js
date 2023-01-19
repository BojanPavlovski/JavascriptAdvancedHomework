let colorInput = document.getElementById("colorInput");
let fontSizeInput = document.getElementById("fontSize");
let textInput = document.getElementById("textInput");
let button = document.getElementById("createHeader");
let headerDiv = document.getElementById("getHeader");

 button.addEventListener("click", function(){
    let newHeader = document.createElement("h1");
     headerDiv.appendChild(newHeader);
     newHeader.style.color = colorInput.value;
     newHeader.style.fontSize = `${fontSizeInput.value}px`;
     newHeader.innerText = textInput.value;
 });

