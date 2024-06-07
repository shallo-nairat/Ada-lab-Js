
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










