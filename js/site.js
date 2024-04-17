

// Get the values from the HTML inputs and store them in a var.
function getValues() {
  // store the values
  let fizzNumber = document.getElementById('fizzNumber').value;
  let buzzNumber = document.getElementById('buzzNumber').value;
  let endNumber = document.getElementById('endNumber').value;

  // change them from a string to a Num
  fizzNumber = Number(fizzNumber);
  buzzNumber = Number(buzzNumber);
  endNumber = Number(endNumber);

      // validate the num is within the defined values else error
  if (isNaN(fizzNumber) || isNaN(buzzNumber) || isNaN(endNumber)) {
  // validate if its a NaN than error for inputting a number
    swal.fire({
      icon:'error',
      title: 'Oops!',
      backdrop: false,
      text: `Please enter numbers only for Fizz Buzz to work properly.`
    });

    // Fizz number isnt between 0-1000
  } else if (fizzNumber < 0 || fizzNumber > 1000) {
    swal.fire({
      icon:'error',
      title: 'Oops!',
      backdrop: false,
      text: `Please ensure Fizz is between 0-1000 for Fizz Buzz to work properly.`
    });

    // buzz isnt between 0-1000
  } else if (buzzNumber < 0 || buzzNumber > 1000) {
    swal.fire({
      icon:'error',
      title: 'Oops!',
      backdrop: false,
      text: `Please ensure Buzz is between 0-1000 for Fizz Buzz to work properly.`
    });

      // End Number isnt between 0-1000
  } else if (endNumber < 0 || endNumber > 1000) {
    swal.fire({
      icon:'error',
      title: 'Oops!',
      backdrop: false,
      text: `Please ensure End Number is between 0-1000 for Fizz Buzz to work properly.`
    });

    // End number is greater than both Fizz and Buzz Numbers
  } else if (endNumber < fizzNumber || endNumber < buzzNumber) {
    swal.fire({
      icon:'error',
      title: 'Oops!',
      backdrop: false,
      text: `Please ensure End Number is greater than the value of Fizz and Buzz number for Fizz Buzz to work properly.`
    });

    // if Fizz is greater than Buzz, but is still valid numebers
  } else {

    let generatedNumbers = generateFizzBuzz(fizzNumber, buzzNumber, endNumber);
    displayFizzBuzz(generatedNumbers);
    // displayValues(generatedNumbers);
  }

    // part of IF stat. if valid: use a function to create array of numbers between values.
      // store those numbers from the funtion in a variable. 
        // put those numbers in an argument and call a function that will add classes for fizz buzz matrix and the values for HTML and call that function


} 



// create a list of all the numbers between those two values


// var that can stor the array and a counter that will generate the array.
function  generateFizzBuzz(fizz, buzz, endNumber) {
  // store the values of the array from 0 to 'endNumber' including keywords
  let numberArray = [];

  // loop counter for generating array
  for (let index = 1; index <= endNumber; index++) {

      
    if ((index % fizz == 0 && index % buzz == 0)) {

      numberArray.push('FizzBuzz');

    } else if (index % fizz == 0) {
      
      numberArray.push('Fizz');

    } else if (index % buzz == 0) {
      
      numberArray.push('Buzz');
    } else {

      numberArray.push(String(index));
    }
    
  }

  // return out the array of numbers
  return numberArray;
}









function displayFizzBuzz(stringArray) {

  let tableHTML = '';

  for (let index = 0; index < stringArray.length; index++) {

    let value = stringArray[index];

    tableHTML += `<tr><td class="${value}">${value}</td></tr>`;
  }


  // let Javascript grab the value of a certain html
  let tbody = document.getElementById('results');

  // change that HTML value to include the string of numbers and html we have created.
  tbody.innerHTML = tableHTML;


}


// Update the string property for the results table to display the values between each number.
    // Assign a class to them based on the Fizz Buzz matrix