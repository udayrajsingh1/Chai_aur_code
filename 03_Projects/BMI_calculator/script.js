const button = document.querySelector("button")

button.addEventListener('click', function(e){
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result');

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerText = `Enter a valid height`
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Enter a valid weight`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span> Your BMI is ${bmi}`
    }
    

})