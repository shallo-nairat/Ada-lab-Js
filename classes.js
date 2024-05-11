class Person{
    constructor(name,age){
      this.name = name;
      this.age =age ;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    
     };
      
}
// its advisable to create your method outside your function in classes
const adam= new Person('Adam',30);
console.log(adam);
adam.greet();

class Student extends Person{
    constructor(name,age,school){
        super(name,age)
        this.school=school
    }
    proffesion(){
        console.log(`I am a student at ${this.school}`);
    }
};

const student= new Student('Jane',19,'AkiraChix');
console.log({student});
student.proffesion();  

 