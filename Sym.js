// const s=Symbol('cvr')
// const s1=Symbol('cvr')
// let user={
//     id:12345,
//      name:'cvr',
//     city:'hyderabad',
//   age:30
// }
// // user.id=987654321;
// const idysm=Symbol('id')
// user[idysm]=987654321;
 

const R=Symbol('red')
const O=Symbol('orange')
const Y=Symbol('yellow')
const B=Symbol('blue')
const car='blue'
function get(color){
    switch(color){
        case R:
            return 'Apple'
            case O:
                return 'Orange'
                case Y:
                    return 'Mango'
                    case B:
                        return 'sky'
                        default:
                            console.log("I dont know")
    }}

  
// let person = {
//     name: "Jack"
// };

 
// person.id = 12;
// console.log(person.id); 

 
// person.id = 'Another value';
// console.log(person.id); 

// let sym = Symbol.for('hello');
// let sym1 = Symbol.for('id');
 
// console.log( Symbol.keyFor(sym) ); // hello
// console.log( Symbol.keyFor(sym1) ); // id


class AlertService
{
    constructor(){
        this.alerts = {};
    }
}
addAlert(symbol, alertText)
{
    this.alerts[symbol]= alertText;
    this.renderAlerts();
}
removeAlert(symbols)
{
    delete this.alerts[symbol];
}
//renderAlerts() {}

// const AlertService = new AlertService();

// const MyComponent {

//    constructor(thing) {
//         this.ComponentId = Symbol(thing);
//     }
// errorHandler(msg) {
//     AlertService.addAlert(this.ComponentId, msg);
//     setTimeout(()=>{
//         AlertService.removeAlert(this.ComponentId);
//         console.log('removed alert', this.ComponentId);
//     },5000);
// }
