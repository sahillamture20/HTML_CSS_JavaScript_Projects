//Access the all elements inside the form tag with
document.getElementById('my-form');

//Access the heading element without ".getElementByID" method
document.querySelector('h1');

//Access elements using class name 
document.querySelector('.container');

//Change content of 'Item 1' -> 'Item 11'
const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Item 11';
ul.children[1].textContent = 'Item 12'; //Change content of 'Item 2' -> 'Item 12'
ul.children[2].textContent = 'Item 13';//Change content of 'Item 3' -> 'Item 13'
ul.children[3].textContent = 'Item 14';//Change content of 'Item 4' -> 'Item 14
ul.lastElementChild.textContent = 'Item 15';//Change content of 'Item 5' -> 'Item 15'

//change color of button
let button = document.querySelector('.btn');
button.style.backgroundColor = 'red';

// Count click 
let button = document.querySelector(".btn");
button.addEventListener("click",(e) =>
  {
    console.log("click");
  e.preventDefault();
});

let nameInput = document.querySelector("#name");

let emailInput = document.querySelector("#email");

let altemailInput = document.querySelector("#altemail");

let mobileInput = document.querySelector("#mobile");

//count cllick after entering name 
let nameInput = document.querySelector("#name");
nameInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(nameInput.value);
});

let emailInput = document.querySelector("#email");
emailInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(emailInput.value);
});
altemailInput.addEventListener("input", e => 
    {
        document.querySelector(".container").append(altemailInput.value);
    });
   
mobileInput.addEventListener("input", e => 
    {
        document.querySelector(".container").append(mobileInput.value);
    });

// Listen for form submit
function onSubmit(e) {
  e.preventDefault();
}

// Select entire form & addEventListener to FORM
let myForm = document.querySelector("#my-form");
myForm.addEventListener('submit', onSubmit);

let msg = document.querySelector(".msg");

// addEventListener to form 
if(nameInput.value === '' || emailInput.value === ''|| altemailInput.value === '' || mobileInput.value === '')
{
  msg.classList.add('error');
  msg.innerHTML = 'Please enter all fields';
}
else
{
  console.log('success');
}

