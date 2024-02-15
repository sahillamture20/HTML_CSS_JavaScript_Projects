// const arr = [1,2,3,4,5,6];
// console.log("A ",arr);

// // Slice
// const sliceArr = arr.slice(1,2);
// console.log("B ",sliceArr);
// console.log("A ",arr);

// // Splice = change the oriinal array also, remove data from starting index till n numbers  
// const spliceArr = arr.splice(1,2);
// console.log("C ", spliceArr);
// console.log("A ",arr);

// Merging 2 arrays

const marvel_heros = ["Ironman", "Captian Americe", "Thor"];
const dc_heros = ["Superman", "Batman", "Flash"];

// push(), method add whle array as a sinle data. So, accessin elements of that array is quite dificult
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// Aother aletrnative of "push()" is concat
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// Another popular method to do this is "Spread operator [...]" IMPORTANT FORM INTERVIEW POINTO VIEW
// const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

let a = 10;
let b = 20
let c = 30;
console.log(Array.of(a,b,c));

console.log(Array.from({name: "sahil"})); //Interesting