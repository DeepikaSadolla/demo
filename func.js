// function * code(){
//     yield 1;
//     yield 2;
//     console.log("print it");
//     // yield 3;
//     // return "This is final";
     
// }
  
// console.log(code().next());
// console.log(code().next().value);
 

// function * code(){
//     yield 1;
//     yield 2;
//     console.log("print it")
//     // yield 3;
//     // return "This is final";
     
// }
//  var gen=code();
// console.log(gen.next());
// console.log(gen.next().value);
// console.log(gen.next());


// function * gen(){
//     var num=1;
//     while(true){
//         yield num++;
//     }
// }
// var g=gen();
// for(var i=0;i<2;i++){
//     console.log(g.next().value);
// } 
// console.log(g.next().value);
// console.log("ok");
// console.log(g.next().value);




const arr=['a','b','c'];
function* gene(){
   yield 1;
   yield* arr;
   yield 2;

}
for(let value of gene()){
 console.log(value);
}