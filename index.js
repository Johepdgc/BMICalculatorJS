// Logic to calculate BMI
function calculateBMI(){
    // Define the variables
    let height = document.getElementById('height').value/100
    let weight = document.getElementById('weight').value
    // Calculate BMI
    let bmi = Math.floor(weight / (height * height));
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi;
    // Check the BMI and display the result
    if (bmi < 18.5){
        document.getElementById("result").innerHTML = "Your BMI is: " + bmi + " You are underweight";
    } else if (bmi > 18.5 && bmi < 24.9){
        document.getElementById("result").innerHTML = "Your BMI is: " + bmi + " You are normal";
    } else if (bmi > 25 && bmi < 29.9){
        document.getElementById("result").innerHTML = "Your BMI is: " + bmi + " You are overweight";
    } else if (bmi > 30){
        document.getElementById("result").innerHTML = "Your BMI is: " + bmi + " You are obese";
    }
}
// Logic to update the value of height and weight in the UI of the slider
function updateValue(value, id) {
    // The value property sets or returns the value of the value attribute of a slider.
    if (id === 'heightValue') {
        value = value / 100;
    }
    if (id === 'weightValue') {
        value = value;
    }
    // The innerText property sets or returns the text content of the specified node, and all its descendants.
    document.getElementById(id).innerText = value;
}