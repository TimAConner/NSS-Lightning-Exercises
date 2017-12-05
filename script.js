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

var person = (function (originalPerson) {
    originalPerson.height = "6'3";
    originalPerson.weight = 175;
    originalPerson.name = "Tim";
    let getName = function(){
        return this.name;
    }

    originalPerson.getName = getName();

    return originalPerson;

})(person || {});


var child = (function (originalPerson) {
    let favGame = "Stratego";
    let favFood = "Bread";

    originalPerson.favGame = favGame;
    originalPerson.favFood = favFood;

    return originalPerson;
})(person || {});

console.log(child.hasOwnProperty("height"));// True

console.log(child.hasOwnProperty("favGame"));// True