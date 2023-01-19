let emptyList = document.getElementById("emptyList");
let button = document.getElementById("btn");

button.addEventListener("click", function(randomName){
    randomName = ["Petko", "Stanko", "Boro", "Stojan", "Bojan"];
     for (let i = 0; i < randomName.length; i++) {
        emptyList.innerHTML += `<li>${randomName[i]}</li>`;
        
     }
});