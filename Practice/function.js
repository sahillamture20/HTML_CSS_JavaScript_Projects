// console.log("functions");
//passing object in function
const myObject = {
    user: "Sahil",
    price: 120
}
function myFunction(anyobject){
    console.log(`Username is ${anyobject.user} and price is ${anyobject.price}`);
}
// myFunction(myObject);

// Passing array in function 

const myArray = [100,200,300];
function myFunction1(getArray){
    return getArray[1];
}
console.log(myFunction1(myArray));

// Yuo can directly pass object and array in the functions also.


// #################### Arrow Function #########################

