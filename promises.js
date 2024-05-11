// const internship = true 
// const ourPromise = new Promise((resolve, reject)=>{
//     if (internship){
//         resolve(`I made it`);
//     }
//     else {
//         reject (`I will try harder`)
//          }

// });

// ourPromise.then(()=>{
//     console.log('I will continue working hard');
// })
// .catch(()=>{
//     console.log('I will continue applying for jobs');
// })
// .finally(()=>{
//     console.log('I will be a Software Engineer');
// });

// console.log({ourPromise})

// // .then()- 
// // .catch()-
// // .finally()-


// async function myakiraChixDream(){
//     try{
//         console.log('This is my dream');
//     await ourPromise;
//     }
//     catch{
//         console.log('Our dreams is not yet successful');
//     }
//     // try and catch are used to debug
// }
// myakiraChixDream();
const internship = false;
const ourPromise = new Promise ((resolve, reject)=>{
    if(internship){
        resolve("I made it")
    }
    else{
        reject("I will try harder")
    }
})
//PROMISES//
ourPromise.then ((response)=>{
    console.log("I will continue working harder")
    console.log ("I will continue applying for jobs");
})
.catch((error)=>{
     console.log("I will continue applying for jobs")
})
.finally(()=>{
    console.log("I will be a Software Engineer")
})
console.log ({ourPromise});
//ASYCHRONOUS AND SYNCHRONOUS//
async function myAkiraChixDream(){
    try{
        console.log ("This is my dream")
        await ourPromise;
    }
catch{
    console.log("Our promise is not yet successful")
}
}
myAkiraChixDream();
//When internship is true code runs//










