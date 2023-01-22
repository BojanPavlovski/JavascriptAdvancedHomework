//~~~~~~~~~~~~~~TASK 01,GETTING FILMS WITH AJAX SYNTAX~~~~~~~~~
  document.getElementById("submit").addEventListener("click", function(){
      $.ajax({
          url: "https://swapi.dev/api/films",
          success: function(response){
              console.log("Request was succesfull");
              let unorderedList = document.getElementById("list");
              unorderedList.innerHTML = "";
              for (let i = 0; i < response.results.length; i++) {
                  unorderedList.innerHTML += `<li>${response.results[i].title}</li>`
                
              }
         },
          error: function(response){
              console.log(`request failed because ${response.status}`);
          }
      })
  })


//~~~~~~~~~~~~~TASK 01,GETTING FILMS WITH FETCH~~~~~~~~~~~
// let button = document.getElementById("submit").addEventListener("click", function(){
//     fetch(`https://swapi.dev/api/films`)
//     .then(response => {
//         console.log(response);
//         response.json()
//         .then(data => {
//             console.log(data);
//             let list = document.getElementById("list");
//             list.innerHTML = "";
//             for (let i = 0; i < data.results.length; i++) {
//                 list.innerHTML += `<li>${data.results[i].title}</li>`
                
//             }
//         })
//     }).catch(error => {
//         console.log(error);
//     })
// })

