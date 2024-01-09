// select form
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    // action stop
    e.preventDefault()

    // select values of height and weight
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    const bmiResult = document.querySelector("#bmi-result")

    // check values valid or not
    if (height === '' || height < 0 || isNaN(height) ){
        result.innerHTML = "Enter a valid height"
    } else if (weight === '' || weight < 0 || isNaN(weight) ){
        result.innerHTML = "Enter a valid weight"
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`
        if (bmi <= 18.5){
            bmiResult.innerHTML = "Underweight"
        } else if(bmi <= 24.9){
            bmiResult.innerHTML = "Normal or Healthy Weight"
        } else {
            bmiResult.innerHTML = "Overweight"
        }
    }
})