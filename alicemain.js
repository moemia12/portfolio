//Inputs

let submitButton = document.getElementById("submit-button");                            // User clicks Submit button will start the calculation

submitButton.addEventListener('click', function(){                                      // Submits calculation

let weightElement = document.getElementById("weight-input");                            // User enters weight
let amountElement = document.getElementById("alcohol-content");                         // Number of drinks consumed
const alcoholTypeElement = document.getElementById("alcohol-type");                     // Type of alcohol consumed with ounces as measurement of value 
const elapsedTimeElement = document.getElementById("elapsed-time");                     // The amount of time passed since drink
const genderButtonElement = document.querySelector('input[name="tools"]:checked');

if (genderButtonElement == null){
    alert("Please choose the Gender"); return false;
    }   
    
    if (weightElement.value == ""){
    alert("Please enter the weight"); return false;
    }   
    
    if (amountElement.value == ""){
    alert("Please enter the Amount of Drinks"); return false;
    }
    
    
    if (elapsedTimeElement.value == ""){
    alert("Please enter the Elapsed time"); return false;
    }

    const weight = parseInt(weightElement.value);                                           // Weight will be the integer value of the weightElement input
    const amount = parseInt(amountElement.value);                                           // Amount will be the integer value of amountElement input 
    const alcoholType = parseFloat(alcoholTypeElement.value);                               // AlcoholType will be the float value of alcoholTypeElement
    const gramsOfAlcohol = (alcoholType*amount)*14;                                         // 14 is the standard multipler for US/UK for grams of alcohol/ per standard unit
    
    
    const genderButton = parseFloat(genderButtonElement.value);                             // genderButton will be the decimal values of genderButtonElement
    const bloodAlcoholContent = (gramsOfAlcohol / ((weight * 1000) * genderButton))*100;    //Function to calculate BAC 
    const elapsedTime = parseInt(elapsedTimeElement.value) * 0.015;                         // Elapsed time calculation - BAC is reduced every hour at a value of 0.015 
    const finalBac = bloodAlcoholContent - elapsedTime;
    const timeTillSober = finalBac/0.015;                                                   // Divide total BAC by 0.015 to find time in hours till sober
    
    
    document.getElementById("result-container").innerHTML = 
    finalBac.toFixed(2) + " " + "BAC";
    
    document.getElementById("sober-clock").innerHTML = 
    timeTillSober.toFixed(1) + " " + "Hours Till Sober";
})


