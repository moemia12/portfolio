// Declaring Earth, Icon and Answer Container variables
               
let icons = [...document.querySelectorAll('.icon-container .fa')];
let answerContainer = document.getElementById("answer-container");
let answerDiv = document.getElementById("answer-div");
let planetImgs = [...document.querySelectorAll(".planet-container img")];


//Function to slide Planet
function adjustActivePlanet (adjustment) { 
  var current = planetImgs.find(it => it.id === 'active-planet'); 
  var currentIndex = planetImgs.indexOf(current);
  var nextIndex = (currentIndex + adjustment) % icons.length;

  if (nextIndex < 0) nextIndex = planetImgs.length - 1;
  current.removeAttribute('id');
  planetImgs[nextIndex].id = 'active-planet'; 


  }

    //Function to slide icons
     function adjustActive (adjustment) { 
     var current = icons.find(it => it.id === 'active'); 
     var currentIndex = icons.indexOf(current);
     var nextIndex = (currentIndex + adjustment) % icons.length;

     if (nextIndex < 0) nextIndex = icons.length - 1;
    current.removeAttribute('id');
    icons[nextIndex].id = 'active'; 

    // Action to find Orbital Period
    let currentPlanet = document.getElementById("active-planet");
    let planetRadius = currentPlanet.dataset.radius;
    console.log(planetRadius)
    let nextElement = document.getElementById("active");
    let vehicleSpeed = nextElement.getAttribute("value")
    let orbitalPeriod = planetRadius / vehicleSpeed;

    answerDiv.innerHTML = orbitalPeriod.toFixed(2);

     }

// Arrow Buttons

document.querySelector('#left-arrow').addEventListener('click', e => adjustActive(-1), adjustActivePlanet(-1) );
document.querySelector('#right-arrow').addEventListener('click', e => adjustActive(1), adjustActivePlanet(1));
document.querySelector('#left-arrow-planet').addEventListener('click', e => adjustActivePlanet(-1),adjustActive(-1) );
document.querySelector('#right-arrow-planet').addEventListener('click', e => adjustActivePlanet(1), adjustActive(1));