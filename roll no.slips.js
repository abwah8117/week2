
     //student name

// Get the form field by its id
const namevalue = document.getElementById('namestudent');

// Get the value of the form field
const namecandidate= namevalue.value;

// Use the text as needed
console.log(namecandidate);

// father name

const fathervalue = document.getElementById('namefather');
const fathercandidate= namevalue.value;
console.log(fathercandidate);

// roll no.

const rollvalue = document.getElementById('namerollno');
const rollcandidate= namevalue.value;
console.log(rollcandidate);
  
// when submit button is pressed

// Get the submit button element
const submitButton = document.getElementById('namesubmit');

                // Add an event listener to the submit button
submitButton.addEventListener('click', function(recheck) {
                // Prevent the default form submission behavior
  recheck.preventDefault();

                // Your code here: what to do when the submit button is pressed
  alert('Submit button pressed!');
  alert('kindly recheck the following of your entered data:');
  const recheckpara = document.getElementById('recheck');
recheckpara.innerText =`kindly recheck the following of your entered data:
student name= ${namecandidate} ,
father name=${fathercandidate} , 
student roll no.=${rollcandidate}`;
});

document.getElementById('namesubmit').addEventListener('click', function() {
    this.innerHTML='<p>form submitted!</p>';
    console.log('Form submitted!');
  });
