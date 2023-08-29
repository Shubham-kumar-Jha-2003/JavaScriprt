const form = document.querySelector('form')

// This useCase will give me empty value 
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    console.log(e.target)
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

  
    if(height === '' || height < 0 || isNaN(height)) {

        result.innerHTML = `Please give me a valid height ${height}`;   
    }else if(weight === '' || weight < 0 || isNaN(weight)) {

        result.innerHTML = `Please give me a valid weight ${weight}`;   
    } else {

        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span> ${bmi} </span>`
        console.log(result);
    } 
})
