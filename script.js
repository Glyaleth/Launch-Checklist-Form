// Write your JavaScript code here!
window.addEventListener("load", function(){
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    response.json().then(function(json){
      let jsonObj = json;
      let rand = Math.floor(Math.random() * jsonObj.length);
      const div = document.getElementById("missionTarget")
      div.innerHTML +=
      `<h2>Mission Destination</h2>
        <ol>
           <li>Name: ${jsonObj[rand].name}</li>
           <li>Diameter: ${jsonObj[rand].diameter}</li>
           <li>Star: ${jsonObj[rand].star}</li>
           <li>Distance from Earth: ${jsonObj[rand].distance}</li>
           <li>Number of Moons: ${jsonObj[rand].moons}</li>
        </ol>
      <img src="${jsonObj[rand].image}">`
    })
  });
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required!");
      event.preventDefault();
    }else if(isNaN(fuelLevel.value) && isNaN(cargoMass.value)){
        alert("Fuel Level and Cargo Mass must be a valid number.");
        console.log(isNaN(fuelLevel.value))
        event.preventDefault();
    }else if(isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
        alert("Fuel Level and Cargo Mass must be a valid number.");
        console.log(isNaN(fuelLevel.value))
        event.preventDefault();
    }else if (fuelLevel.value < 10000 || cargoMass.value > 10000){
      event.preventDefault();
      document.getElementById("launchStatus").innerHTML = "Shuttle is NOT Ready for Liftoff"
      document.getElementById("launchStatus").style.color = "red";
      faultyItems.style.visibility = "visible"
      if(fuelLevel.value < 10000 && cargoMass.value > 10000){
        document.getElementById("fuelStatus").innerHTML = "We do not have enough fuel";
        document.getElementById("cargoStatus").innerHTML = "We've got way too much cargo";
      }
      else if(fuelLevel.value > 10000 && cargoMass.value > 10000){
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "We've got way too much cargo";
      }
      else if (fuelLevel.value < 10000 && cargoMass.value < 10000){
        document.getElementById("fuelStatus").innerHTML = "We do not have enough fuel";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
      }

    }else{
      event.preventDefault();
      document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Liftoff"
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
      document.getElementById("launchStatus").style.color = "green";
      faultyItems.style.visibility = "visible"
    }


  });


});





/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
