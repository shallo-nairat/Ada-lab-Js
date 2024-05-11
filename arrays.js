let fruits = ['Mango','Banana','Orange'];
let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

fruits[1]=2;
console.log({fruits});

console.log('last item ', fruits.slice(-1));
console.log(fruits[fruits.length -1
])

let addlast = fruits.push('Apple');
console.log({fruits});

let addStart = fruits.unshift('Pineapple')
console.log({fruits});

let removeLast = fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});

let newFruits = fruits.push(['Tomato', 'Pear']);
console.log({fruits});

let items =[20,30,40,50,60]
let add = items.reduce((acc,cur)=> acc+cur);//adds sum of items
console.log({add})

let multiply = items.map (item=>item*2);//manipulates each item and returns an array can use other methodslike squares
console.log({multiply});

let square= [];
let total=0
items.forEach(item=>{
const multiple = item*item;
   console.log( item*item); 
   square.push(multiple);
   total+=item
} )
                            
   // you cannot return
console.log({square});
console.log({total});

//destructuring  
let [num1, num2, num3 , ...rest]=items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});
 