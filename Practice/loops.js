const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(greet);
}
const arr = [1,2,3,4]
for (const arrele of arr) {
    // console.log(arrele);
}

const map = new Map()
map.set('IN', "India")
map.set('US',"United States")
map.set('Fr',"France")

for (const [key, value] of map) {
    // console.log(key, ":", value);
}
const array1 = ["sahil","sameer","sumit","suushil", "tanmay", "pratik","chaitanya","shreyas"]
for (const key in array1) {
    // console.log(array1[key])
}

const coding = [
    {
        language: "JavaScript",
        fileType: ".js"
    },
    {
        language: "Java",
        fileType: ".class"
    },
    {
        language: "Python",
        fileType: ".py"
    },
    {
        language: "HTML",
        fileType: ".html"
    },
    {
        language: "CSS",
        fileType: ".css"
    }
]
coding.forEach((item) => {
    // console.log(item.language, ":", item.fileType);
})

const new_arr = [1,2,3,4,5,6,7,8,9,10]
// const ans = new_arr.filter( (nums) => nums > 4 ) // Without using {} & return keyword
// console.log(ans);

// const ans1 = new_arr.filter( (num) => {return num < 5}) 
//When we use {} i.e. open a scope then using "return" keyword is must otherwise we'll get empty array.
// console.log(ans1);

// const ams2 = new_arr.map( (num) => num + 10 )
// console.log(ams2);

// const ans2 = new_arr.map( (num) => {return num + 10} )
// console.log(ans2);

// method chaining
const ans3 = new_arr.map( (num) => num * 10).filter( (num) => num <= 50)
console.log(ans3);



