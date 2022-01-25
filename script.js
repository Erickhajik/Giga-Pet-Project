//Note:I tried a lot to fix the error in Swal portion which show the 
//alert thing,but i couldnt resolve the issue
$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);

   $('.Sleep-button').click(clickedSleepButton);

    
  })
function petInfo(name,weight,happiness,energy)
  {
    this.name=name;
    this.weight=weight;
    this.happiness=happiness;
    this.energy=energy;
  }
  
  var pet1=new petInfo("Jane",50,80,40);

  var PlaySound =new Audio('https://cdn.glitch.me/265bc207-5275-4df4-8cd8-5d74383a0cac%2Fbig%20tired%20dog%20panting.wav?v=1636344044706');
    var ExercsieSound=new Audio('https://cdn.glitch.me/265bc207-5275-4df4-8cd8-5d74383a0cac%2FDog%20Growling%20And%20Barking.mp3?v=1636343034902');
var SleepSound =new Audio('https://cdn.glitch.me/265bc207-5275-4df4-8cd8-5d74383a0cac%2FMicrosoft%20Windows%20XP%20Shutdown%20Sound.mp3?v=1636343026155');
var treatSound =new Audio('https://cdn.glitch.me/265bc207-5275-4df4-8cd8-5d74383a0cac%2Fhorde%20of%20barking%20dogs.wav?v=1636344225570');

function clickedTreatButton() {
     pet1.weight++;
      pet1.happiness++;
      pet1.energy=pet1.energy+3;
      // Increase pet happiness
      // Increase pet weight
  treatSound.play();
       // alert("Woof Woof");
Swal.fire("Woof Woof");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
       pet1.happiness++;
       pet1.weight--;
      pet1.energy=pet1.energy-10;
      // Increase pet happiness
      // Decrease pet weight
      PlaySound.play();
      Swal.fire("Lest'go");
     
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
       pet1.weight--;
      pet1.happiness--;
      pet1.energy=pet1.energy-15;
      ExercsieSound.play();
      Swal.fire("ruff ruff");

      checkAndUpdatePetInfoInHtml();
    }
//Actoin button
  function clickedSleepButton()
{
   pet1.weight=pet1.weight+10;
  pet1.happiness=100;
  pet1.energy=100;
  SleepSound.play();
  Swal.fire("Zzzzzzzzzzzz");
  checkAndUpdatePetInfoInHtml();
}

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if(pet1.weight <0)
        {
          pet1.weight=0
        }
      else if(pet1.happiness<0)
        {
          pet1.happiness=0
        }
    
      
      else if(pet1.energy>100)
        {
          pet1.energy=100
        }
      // Add conditional so if weight is lower than zero, set it back to zero
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet1['name']);
      $('.weight').text(pet1['weight']);
      $('.happiness').text(pet1['happiness']);
       $('.energy').text(pet1['energy']);
    }
