/* Exersise 1 */
let people =[
    {
        name: "Bob", 
        department: "sales", 
        title: "sales manager"},
    {
        name: "Tina", 
        department: 'finance', 
        title: 'director of finance'
    },
    {
        name: "Randy", 
        department: 'IT', 
        title: 'hardware guy'},
    {
        name: "Glenda", 
        department: 'C-suite', 
        title: 'CEO'
    }
];

function print(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i].name}’s job title is ${arr[i].title}`);
    }
}

print(people);