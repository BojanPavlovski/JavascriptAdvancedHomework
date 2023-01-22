function printName(name){
    let vehicleNameHeader = document.getElementById("vehicleNameHeader");
    vehicleNameHeader.innerText = name;
}

function getStats(response){
    let statsTable = document.getElementById("statsTable");
    statsTable.innerHTML = "";
    statsTable.innerHTML += `
    <tr>
    <td>Model</td>
    <td>${response.model}</td>
    </tr>
    <tr>
    <td>Manufacturer</td>
    <td>${response.manufacturer}</td>
    </tr>
    <tr>
    <td>Crew</td>
    <td>${response.crew}</td>
    </tr>
    <tr>
    <td>Passengers</td>
    <td>${response.passengers}</td>
    </tr>
    <tr>
    <td>Class</td>
    <td>${response.vehicle_class}</td>
    </tr>
    `;
}

//~~~~~~~~~~~~TASK02 WITH FETCH~~~~~~~~

// let btn = document.getElementById("submit");
// btn.addEventListener("click", fetchFunction);

//  function fetchFunction(){
//      fetch("https://swapi.dev/api/vehicles/20")
//      .then(response => {
//          console.log(response)
//          response.json()
//          .then(response => {
//              console.log(response);
//              printName(response.name);
//              getStats(response);
//          })
//      }).catch(error => {
//          console.log(error);
//      })
//  }


//~~~~~~~~~~TASK02 WITH AJAX SYNTAX~~~~~~~~
 $(function(){
     let btn = document.getElementById("submit");
     btn.addEventListener("click", function(){
         $.ajax({
             url: "https://swapi.dev/api/vehicles/20",
             success: function(response){
                 console.log("Request was successful.");
                 printName(response.name);
                 getStats(response)
             }
         })
     },
     error => {
         console.log(error);
     }
     )
 })

