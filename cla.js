class human{
    constructor(){
        this.age=25;
    }
    printAge(){
        console.log(this.age)
    }
}
class person extends human{
    constructor(){
        super();
        this.name="abc";
    }
    printName(){
        console.log(this.name)
    }
}
const per=new person();
 per.printAge();
 per.printName();