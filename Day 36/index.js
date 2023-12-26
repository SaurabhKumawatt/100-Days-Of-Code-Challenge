console.log("Day 36 - 100 Days Of Code Challenge");
// Date and Time in JavaScript 

// Date

let myDate = new Date()
console.log(myDate.toString());

// for todays day/ date/ month/ year information
// console.log(myDate.toDateString());

// only for todays date
// console.log(myDate.getDate());

// console.log(myDate.toISOString())

// for current time and date
console.log(myDate.toLocaleString())

// for current time 
console.log(myDate.toLocaleTimeString())

// date declaration 
let newDate = new Date(2002, 11, 12)
console.log(newDate.toLocaleString())

let newDateTime = new Date(2002, 11, 12, 15, 51)
console.log(newDateTime.toLocaleString())

let newStrDate = new Date("2002, 12, 12")
console.log(newStrDate.toLocaleString())

// Time Stamp

// output in ms(milliseconds)
let myTime = Date.now()
console.log(myTime);

let myTimeSec = Math.round(Date.now()/1000)
console.log(myTimeSec);


// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const aDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

aDate.toLocaleString('Default', {
    weekday : "long",
    day : "numeric",
    years : "2-digit"
})
console.log(aDate.toLocaleString("UTC"))
console.log(aDate);

const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("UTC", options));