// Write your JavaScript code here!
window.addEventListener("load", function(){
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
        document.getElementById("fuelStatus").innerHTML = "We do not have enough fuel.";
        document.getElementById("cargoStatus").innerHTML = "We've got way too much cargo.";
      }
      else if(fuelLevel.value > 10000 && cargoMass.value > 10000)
        document.getElementById("cargoStatus").innerHTML = "We've got way too much cargo.";
      else if (fuelLevel.value < 10000 && cargoMass.value < 10000)
        document.getElementById("fuelStatus").innerHTML = "We do not have enough fuel.";
    }else{
      event.preventDefault();
      document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Liftoff"
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
