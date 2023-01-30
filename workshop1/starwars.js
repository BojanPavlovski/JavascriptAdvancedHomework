let personImage = document.getElementById("person");


function populateTable(response){
    let table = document.getElementById("statsTable");
    let tbody = document.getElementById("firstBody");
    tbody.innerHTML = "";
    for (let i = 0; i < 10; i++) {
         let person = response.results[i];
         let personName = person.name;
         let personHeight = person.height;
         let personMass = person.mass;
         let personGender = person.gender;
         let personBirthYear = person.birth_year;
         let Appearances = person.films.length;

         
         let row = table.insertRow();
         let nameCell = row.insertCell(0);
         let heightCell = row.insertCell(1);
         let massCell = row.insertCell(2)
         let genderCell = row.insertCell(3);
         let birthYearCell = row.insertCell(4);
         let appearancesCell = row.insertCell(5);

         nameCell.innerHTML = personName;
         heightCell.innerHTML = personHeight;
         massCell.innerHTML = personMass;
         genderCell.innerHTML = personGender;
         birthYearCell.innerHTML = personBirthYear;
         appearancesCell.innerHTML = Appearances; 
        }
    
}

function callApi(url){
    fetch(url)
    .then(response => {
        response.json()
        .then(response => {
            console.log(response);
            populateTable(response)
        })
    }).catch(error => {console.log(error);})
}
let next10 = document.getElementById("nextButton");
personImage.addEventListener("click", function(){
   
    callApi("https://swapi.dev/api/people/?page=1");
    next10.style.display = "initial"
})

let previousButton = document.getElementById("previousButton");
next10.addEventListener("click", function(){
    callApi("https://swapi.dev/api/people/?page=2")
    previousButton.style.display = "initial";
    next10.style.display = "none";
})

previousButton.addEventListener("click", function(){
    callApi("https://swapi.dev/api/people/?page=1");
    next10.style.display = "none";
})

let spaceShipImage = document.getElementById("spaceship");
spaceShipImage.addEventListener("click", function(){
 fetchApi("https://swapi.dev/api/starships/?page=1")
 nextShipsBtn.style.display = "initial"
})

let nextShipsBtn = document.getElementById("nextShips");
let previousShips = document.getElementById("previousShips");
previousShips.addEventListener("click", function(){
    fetchApi("https://swapi.dev/api/starships/?page=1")
    nextShipsBtn.style.display = "initial";
    previousShips.style.display = "none";
})

nextShipsBtn.addEventListener("click", function(){
    fetchApi("https://swapi.dev/api/starships/?page=2")
    previousShips.style.display = "initial"
    nextShipsBtn.style.display = "none";

})

function populateShipsTable(response){
let table = document.getElementById("shipsTable");
let tbody = document.getElementById("secondBody");
tbody.innerHTML = "";
for (let i = 0; i < 10; i++) {
    let ship = response.results[i];
    let shipName = ship.name;
    let shipModel = ship.model;
    let shipManufacturer = ship.manufacturer;
    let shipCost = ship.cost_in_credits;
    let shipClass = ship.starship_class;

    let row = table.insertRow();
    let nameCell = row.insertCell(0);
    let modelCell = row.insertCell(1);
    let manufacturerCell = row.insertCell(2);
    let costCell = row.insertCell(3);
    let classCell = row.insertCell(4);

    nameCell.innerHTML = shipName;
    modelCell.innerHTML = shipModel;
    manufacturerCell.innerHTML = shipManufacturer;
    costCell.innerHTML = shipCost;
    classCell.innerHTML = shipClass;


    
}
}

function fetchApi(url){
    fetch(url)
    .then(response => {
        response.json()
        .then(response => {
            console.log(response);
            populateShipsTable(response);
        })
    }).catch(error => {console.log(error);})
}