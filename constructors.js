 function Person (name,age){
    this.name = name;
    this.age = age;
    // adding a method
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
 };
//  we are creating an instance of person to adam
//  we use the (new) word when creating instances
 const adam =new Person ('Adam',30); 
 console.log(adam);

 adam.language= 'English';  
 console.log({adam});

 const eve = new Person ('Eve',20);
 console.log(eve);


//  we have prototypes which are hidden objects inside objects
// when we add a new value it will go to the property not the main object

Person.prototype.nationality='Kenyan';
console.log(adam);
console.log('adam-nationality',adam.nationality);
console.log('eve-nationality', eve.nationality);

// main othe main it ignobjects come before prototype
// so when we add nationality to ugandan this is added to main object of eve so when we console 
// it ignores  the prototype.

eve.nationality='Ugandan';
console.log({eve});
console.log({adam});

adam.greet()

