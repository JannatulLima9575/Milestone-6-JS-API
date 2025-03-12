// Set timeout use for only one loop
setTimeout (() => {
    // console.log("Set Time Out!");
    
},2000)

// Set interval use for continue loop / infinite loop
setInterval (() => {
    // console.log("Set Interval!");
},2000)

// stop interval loop
let count = 0;
const clockID = setInterval (() => {
    count ++;
    // console.log(count);

    // stop interval using loop
    if(count >= 5) {
        clearInterval(clockID)
    }

    // for stop interval
    // clearInterval(clockID)
},2000)