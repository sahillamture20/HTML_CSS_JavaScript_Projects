
//Keyboard Events
// Accessing elements
let nameInput = document.querySelector("#name");

let emailInput = document.querySelector("#email");

let mobileInput = document.querySelector("#mobile");

let clgnameInput = document.querySelector("#clgname");
//taking values
nameInput.addEventListener("input", e => 
    {
        document.querySelector(".container").append(nameInput.value);
    });

emailInput.addEventListener("input", e => 
    {
        document.querySelector(".container").append(emailInput.value);
    });
   
mobileInput.addEventListener("input", e => 
    {
        document.querySelector(".container").append(mobileInput.value);
    });

clgnameInput.addEventListener("input", e => 
    {
        document.querySelector(".container").append(clgnameInput.value);
    });   
//function
function onSubmit(e) 
    {
        e.preventDefaut();
    };

let myform = document.querySelector("#my-form");
myform.addEventListener("submit",onSubmit);

let msg = document.querySelector(".msg");

    // checking fiels are empty or not
    if(nameInput.value === '' || emailInput.value === '' || mobileInput.value === ''|| clgnameInput.value === ''){
        //msg.classList.add('error');
        //console.log("Please fill all the fields");
        //msg.innerHTML= 'Please enter all fields';
        //setTimeout(() => msg.remove(), 3000);

        let button = document.querySelector(".btn");
        button.addEventListener("click", (e) =>
    {
        //console.log("click");
        msg.classList.add('error');
        //console.log("Please fill all the fields");
        msg.innerHTML= 'Please enter all fields';
        //setTimeout(() => msg.remove(), 3000);
        e.preventDefault();
    });

    }
    else{
        console.log("Success");
    }
    // Adding to the list
    let userList = document.querySelector(".items");
    if(nameInput.value === '' || emailInput.value === '' || mobileInput.value === ''|| clgnameInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML= 'Please enter all fields';
    }
    else{
       let li = document.createElement("li");
       li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}, ${mobileInput}, ${clgnameInput.value}'));

       userList.appendChild(li);
       nameInput.value = '';
       emailInput.value = '';
       mobileInput.value === '';
       clgnameInput.value === ''
    }