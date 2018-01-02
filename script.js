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


/* Exercise 4 */

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let fave_demo = [];

for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 18 && ages[i] <= 49){
        fave_demo.push(ages[i]);
    }
}
console.log("for loop", fave_demo);

fave_demo = [];

ages.forEach((x) => {
    if(x >= 18 && x <= 49){
        fave_demo.push(x);
    }
});

console.log("foreach", fave_demo);

fave_demo = [];

fave_demo = ages.filter((x) => x >= 18 && x <= 49);

console.log("filter", fave_demo);
