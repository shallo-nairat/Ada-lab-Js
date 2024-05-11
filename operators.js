let a = 20;
let b = 30;

let add = a + b;
console.log({add});

let subtract = a - b;
console.log({subtract});

let division = a / b;
console.log({division});

let multiply = a*b;
console.log({multiply});

let c = '20';
let looselyEqualto = a == c;
console.log({looselyEqualto});

let strictlyEqualto = a ===c;
console.log({strictlyEqualto});

let notEqualto = a!=c;
console.log({notEqualto});

let strictlyNotEqualto = a!==c;
console.log({strictlyNotEqualto});
// this is an increment
a++;
console.log({a});
//this is a decrement
b--;
console.log({b});

a+=5;
console.log({a});

//implicit coercion
let d = 1*c;
console.log({d})
 let e = +c;
 console.log({e});

 //explicit coercion

 let f = Number (c);
 console.log({f});

 




