const cup ={
    color:'red',
    size:'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkType:"tea",
        temperature:'hot'
    },

    drink:function(){ // drink:=> if we use arrow function we use cup instead of this
        console.log("use me to drink")
        console.log(`My main purpose is to drink ${this.functionality.temperature}${this.functionality.drinkType}`);
    }
    //use of (this there are two types -global -local this)
};

console.log({color: cup.color});
console.log("size", cup.size);
console.log("temperature", cup.functionality.temperature)
console.log('texture', cup['texture'])

cup:model:'glass'; //this properties is not part of the original objects above
console.log([cup]);

delete cup.model;
console.log([cup]);

cup.color='green'; // change the color
console.log([cup]);

cup.drink() ;//triggering the calling of its function

const keys= Object.keys(cup); // we are getting all the keys in our class
console.log([keys]);

const values=Object.values(cup); // we are getting all the values in our class
console.log([values]);

const loop = Object.keys(cup).map(item=>{
    return ({key:item, values:cup[item]});
})

Object.keys(cup).forEach(item => {
    console.log({key:item, value:cup[item]});
})