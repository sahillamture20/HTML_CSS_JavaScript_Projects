// There are 2 way to declare the obects -> as a literal & as a constructor
// There is no difference of performance, only diference is singleton

// Singleton - if we create ojects using constuctor then it is in the form of singleton, 
// objcet created using literals is not come under singleton
// Object.create


// object literals 
const mySym = Symbol("symbolkey")
const JsUser = {
    name: "Sahil",
    "full name": "Sahil Lamture",
    [mySym]: "mykey1",
    age: 24,
    profession: "Full stack web developer",
    location: "Mumbai",
    email: "sahil@gmail.com"
};

// How to access elements of objects
// console.log(JsUser.name); //Do not use this method
// console.log(JsUser["name"]); //Always use this method, internally keys are written inside doule quotes ""
// console.log(JsUser["full name"]); //Here, you cannot access "full name" using dot operator
// How to use symbol inside the objects
// console.log(JsUser.mySym); //Here, you will get undefined value
// console.log(JsUser[mySym]); // Here, you get the actual value mentioned inside the object

// How to change the value o specific key
JsUser.email = "sahil@gpt.com";
// Object.freeze(JsUser);
JsUser.email = "sahil@google.com";
// console.log(JsUser);

// Functions inside the object
JsUser.greeting = function(){
    console.log("Hello user");
}
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// How to use elements of objects inside functions
JsUser.greetingTwo = function(){
    console.log(`Hello ${this["full name"]}`);
}
// console.log(JsUser.greetingTwo());

// Onject merging
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c", 4:"d"};
// const obj3 = Object.assign({}, obj1, obj2);
// Using spread operator
const obj3 = {...obj1, ...obj2};
// console.log(obj3); 
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

const tinderUser = {};
tinderUser.id = "abc123";
tinderUser.name = "sammy";
tinderUser.gender = "male";
tinderUser.isLogedIn = true;

// console.log(tinderUser);
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogedIn'));

// Destructuring
const course = {
    corsename : "Javascript",
    corseprice: 199,
    courseInstructor: "Sahil"
}
// instead of using dot(.) operator which is teadious, use destructuring
const {courseInstructor: mentor} = course;
console.log(mentor);