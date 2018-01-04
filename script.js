/* Exersise 1 */
// let people = [
//     {
//         name: 'Bob', 
//         department: 'sales',
//         title: 'sales manager'},
//     {
//         name: 'Tina', 
//         department: 'finance', 
//         title: 'director of finance'
//     },
//     {
//         name: 'Randy', 
//         department: 'IT', 
//         title: 'hardware guy'},
//     {
//         name: 'Glenda', 
//         department: 'C-suite', 
//         title: 'CEO'
//     }
// ];

// function print(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(`${arr[i].name}’s job title is ${arr[i].title}`);
//     }
// }

// print(people);

/* Exersise 2 */

// var person = (function (originalPerson) {
//     originalPerson.height = "6'3";
//     originalPerson.weight = 175;
//     originalPerson.name = "Tim";
//     let getName = function(){
//         return this.name;
//     }

//     originalPerson.getName = getName();

//     return originalPerson;

// })(person || {});


// var child = (function (originalPerson) {
//     let favGame = "Stratego";
//     let favFood = "Bread";

//     originalPerson.favGame = favGame;
//     originalPerson.favFood = favFood;

//     return originalPerson;
// })(person || {});

// console.log(child.hasOwnProperty("height"));// True

// console.log(child.hasOwnProperty("favGame"));// True

/* Exersies 3 */

// let array = [45, 'I', true, null, 'am', 3.56, 'a', undefined, { catchphrase: 'Oh hai, Mark'}, 'JS', 'rockstar'];

// let stringArray = array.filter(word => ((typeof(word) === "string")));

// console.log(stringArray);


// /* Exercise 4 */

// let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102],
// fave_demo = [];

// ages = ages.sort((a, b) => a - b);


// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18 && ages[i] <= 49) fave_demo.push(ages[i]);
// }
// console.log("for loop", fave_demo);

// fave_demo = [];

// ages.forEach((x) => {
//     if(x >= 18 && x <= 49) fave_demo.push(x);
// });
// console.log("foreach", fave_demo);

// fave_demo = [];

// fave_demo = ages.filter(x => x >= 18 && x <= 49);
// console.log("filter", fave_demo);

// /* Exercise 5 */

// let hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//       copies_sold: 14000000,
//       formats: ["radio", "TV", "film", "graphic novel"],
//       ultimate_answer: {
//         meaning_of_life: 42
//       }
//     }
//   };

//   let meaning = "meaning_of_life"; 

// console.log("The meaning of life is", hitchhikers_guide.random_facts.ultimate_answer[meaning]);

/* Exercise 6*/

// let yoda_quote = ["the", "greatest", "teacher" , "failure", "is"];

// // yoda_quote[0] = yoda_quote[0].charAt(0).toUpperCase() + yoda_quote[0].slice(1);
// // yoda_quote[2] += ",";

// yoda_quote = yoda_quote.map((word) => {
//     if(word === "the") word = word.charAt(0).toUpperCase() + word.slice(1);
//     if(word === "teacher") word += ",";
//     return word;
// }).join(" ");

// console.log("Yoda says,", '"' + yoda_quote + '."');


/* Exercise 8 */

let nums = [1, 2, 3, 4, "5", 6, "7"]

let sorted = [];
// let sorted = nums.sort((a, b) => {
//    return  +a - +b
// }   
// );

// nums = nums.map((x) => {(+x*2)-1});


for(let i = 0; i < nums.length-1; i ++){
    sorted.push(+nums[i] + +nums[i+ 1]);
}

// for(let i = 0; i  < nums.length; i++){
 
//     if(i === 0){
//         nums.push(9);
//         nums.push(11);
//         nums.push(13);
//         nums = nums.filter((x) => +x % 2 !== 0);
//         nums.shift();
//     }
//     nums[i] = +nums[i];

    
// }

console.log(sorted);