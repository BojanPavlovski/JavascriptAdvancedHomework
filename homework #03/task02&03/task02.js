let button = document.getElementById("submit");


function populateTable (response){
    let table = document.getElementById("planetTable");
    let tbody = table.getElementsByTagName("tbody")[0]
    tbody.innerHTML = "";
    
    for (let i = 0; i < 10; i++) {
        let planet = response.results[i];
        let planetName = planet.name;
        let population = planet.population;
        let climate = planet.climate;
        let gravity = planet.gravity;

        
         let row = table.insertRow();
         let nameCell = row.insertCell(0);
         let populationCell = row.insertCell(1);
         let climateCell = row.insertCell(2);
         let gravityCell = row.insertCell(3);

         nameCell.innerHTML = planetName;
         populationCell.innerHTML = population;
         climateCell.innerHTML = climate;
         gravityCell.innerHTML = gravity;

    }
}

function fetchAPI(url){
    fetch(url)
    .then(response => {
        console.log(response);
        response.json()
        .then(response => {
            console.log(response);
            populateTable(response);
        })
    }).catch(error => {
        console.log(error);
    })
}


let next10 = document.getElementById("next10");

button.addEventListener("click", function(){
    fetchAPI("https://swapi.dev/api/planets/?page=1");
    next10.style.display = "initial";
    button.style.display = "none";
});



next10.addEventListener("click", function(){
    fetchAPI("https://swapi.dev/api/planets/?page=2");
    next10.style.display = "none"
    previous.style.display = "initial";
    button.style.display = "none";
})
let previous = document.getElementById("previous");
previous.addEventListener("click", function(){
    fetchAPI("https://swapi.dev/api/planets/?page=1");
    previous.style.display = "none";
    next10.style.display = "initial";
})
