// console.log('CVR');
// setTimeout(() => {
//     console.log('IT');
// }, 2000);

// console.log('III-a');
// console.log(' Hello ');



console.log('CVR');
setTimeout(() => {
    calculate();
}, 2000);
console.log('III-A');
console.log('Hello');
 

function calculate(){
    let sum = 0;
    for(let i = 0; i< 100; i++){
        sum +=i;
    }
    console.log('Math result ',sum)
}