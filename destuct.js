//  const user={
//     firstname:"Riya",
//     address:{
//     city:"Delhi"
//     }
// }
// const name=user.firstname;
//const m=user.address.city;
//  const{firstname,address}=user;
// const {city}=address;
// console.log(city)
 

// const{firstname,...users}=user;
// console.log(firstname)
// console.log(users)



const sc=[10,20,30,40,50];
console.log(sc[0])
// const [x,c]=sc;
// console.log(x)
// console.log(c)
// const [ ,x, , ,c]=sc;
// console.log(x)
// console.log(c)
const [x, ,c,...o]=sc;
console.log(x)
console.log(o)
const [...d]=sc;
console.log(d);