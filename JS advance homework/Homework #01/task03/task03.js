 let colorInput = document.getElementById("colorInput");
 let fontSize = document.getElementById("fontSizeInput");
 let itemContent = document.getElementById("itemsInput");
 let resultDiv = document.getElementById("resultDiv");
 let button = document.getElementById("btn");

 button.addEventListener("click", function(){
     let item = itemContent.value;

     let items = item.split(" ");
     let unorderedList = document.createElement("ul");
     

     for (let i = 0; i < items.length; i++) {
         let listItem = document.createElement("li");
         listItem.innerText = items[i];
         listItem.style.color = colorInput.value;
         listItem.style.fontSize = `${fontSize.value}px`;
         unorderedList.appendChild(listItem);
         resultDiv.appendChild(listItem);
         
        
     }
    
})


