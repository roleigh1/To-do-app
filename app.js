

// Select the input field
const inputField = document.querySelector('#input-field');

// Add an event listener to the input field that listens for the keydown event
inputField.addEventListener('keydown', (event) => {
  // Check if the enter key was pressed
  if (event.keyCode === 13) {
    // Get the value of the input field
    const inputFieldValue = inputField.value;

    // Create a new li element
    const liElement = document.createElement('li');

    // Set the li element's value to the value of the input field
    liElement.textContent = inputFieldValue;

    // Append the li element to an ul element
    const ulElement = document.querySelector('.border-list');
    ulElement.appendChild(liElement);

    // Select all the li elements
    const liElements = document.querySelectorAll('li');


        // Create a new input element
        const inputElement = document.createElement('input');

        // Set the type attribute of the input element to 'radio'
        inputElement.setAttribute('type', 'checkbox');

      

        // Set the value and checked attributes of the input element
        inputElement.setAttribute('value', liElement.textContent);

        // Append the input element t,o the li element
        // Use last item only
        liElements[liElements.length-1].appendChild(inputElement);
        countListItems();
        
    }
    
    });

    function deleteActiveLiElements() {
        // Select all the input elements with the type 'radio'
        const inputElements = document.querySelectorAll('input[type="checkbox"]');
      
        // Iterate over the input elements
        inputElements.forEach((inputElement) => {
          // If the input element is checked, delete the parent li element
          if (inputElement.checked) {
            inputElement.parentElement.remove();
          }
        });
        countListItems();
      }  document.querySelector('.delete-button').addEventListener('click', deleteActiveLiElements);


      function createLineThrough() {
        const liElements = document.querySelectorAll('li');
      
        liElements.forEach((liElement) => {
          const radio = liElement.querySelector('input[type="checkbox"]');
          if (radio && radio.checked) {
            // If it is, add the line-through style to the parent li element
            liElement.style.textDecoration = 'line-through';
          } else {
            // If it's not, remove the line-through style from the parent li element
            liElement.style.textDecoration = 'none';
          }
        });
        
      }
      document.querySelector('.complete').addEventListener('click', () => {
        createLineThrough()
      })
      function unLineThrough() {
        const liElements = document.querySelectorAll('li');
      
        liElements.forEach((liElement) => {
          const radio = liElement.querySelector('input[type="checkbox"]');
          if (radio && radio.checked) {
            // If it is, add the line-through style to the parent li element
            liElement.style.textDecoration = 'none';
          }
        });
      }
document.querySelector('.uncomplete').addEventListener('click', () => {
  unLineThrough();
});

function countListItems() {
  // Select the ul element
  const ulElement = document.querySelector('ul');
  // Get all the children of the ul element
  const liElements = ulElement.children;
  // Get the length of the li element array
  const count = liElements.length; 
  // Select all p elements
  const pElements = document.querySelectorAll('p');
  // Loop through the p elements and set the text
  pElements.forEach(pElement => {
    pElement.innerHTML = `${count} items left`;
});
}
countListItems();

function deleteComplete() {
 const liElements = document.querySelectorAll('li');
  liElements.forEach((liElement) => {
   if (liElement.style.textDecoration === 'line-through') {
    // Get the parent element of the li element
    const parentElement = liElement.parentElement;
    // Remove the li element from the parent element
    parentElement.removeChild(liElement);
}
})
  countListItems(); 
}
function bgDark() {
  const background = document.getElementsByTagName('body')[0];
  const moon = document.querySelector('#moon');
  const sun = document.querySelector('#sun');
  const ul = document.querySelector('.border-list');
 
  const inputField = document.querySelector('#input-field');
  const bgImage = document.querySelector('.bg-head');
  const functionLine = document.querySelector('.functions');
// we change the theme to black 
    background.style.backgroundColor = "hsl(235,21%,11%)";
    if(background.style.backgroundColor ="hsl(235,21%,11%)"){ 
       moon.style.display = "none"; 
       sun.style.display ="block"; 
       ul.style.backgroundColor = "hsl(235, 24%, 19%)";
       ul.style.color = "white";
       inputField.style.backgroundColor = "hsl(235, 24%, 19%)";
       inputField.style.color ="white";
       bgImage.style.backgroundImage ="url('bg-desktop-dark.jpg')";
       functionLine.style.backgroundColor = "hsl(235, 24%, 19%)";
       functionLine.style.color = "white";
      
      }
}
function bgWhite(){
  const background = document.getElementsByTagName('body')[0];
  const moon = document.querySelector('#moon');
  const sun = document.querySelector('#sun');
  const ul = document.querySelector('.border-list');
  const inputField = document.querySelector('#input-field');
  const bgImage = document.querySelector('.bg-head');
  const functionLine = document.querySelector('.functions');
  
// we chane the background to white
  background.style.backgroundColor = "white";
  if (background.style.backgroundColor = "white") {
    sun.style.display = "none"; 
    moon.style.display = "block"; 
    ul.style.backgroundColor = "white";
    ul.style.color = "rgb(107, 106, 106)";
    inputField.style.color = "black"; 
    inputField.style.backgroundColor = "white"; 
    bgImage.style.backgroundImage = "url('bglight.jpg')";
    functionLine.style.backgroundColor= "white";
    functionLine.style.color = "rgb(107, 106, 106)";
  }
}

