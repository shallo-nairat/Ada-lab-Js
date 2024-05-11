function greet (userName,callback){
      console .log(`Hello there ${userName}`);
      callback();
};

function intro(){
    console.log(`This is me`)
}
greet (`Hellen`,intro);

// can be used to time an alarm

setTimeout(intro,4000); 


//can be used when setting the snoozing time in alarms
// setInterval(function(){
//     console.log(`This is an interval`);
// },3000);