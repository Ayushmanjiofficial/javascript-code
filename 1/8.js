// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Fri Dec 22 2023 10:47:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Fri Dec 22 2023
// console.log(myDate.toLocaleString()); // 12/22/2023, 10:48:32 AM
// console.log(typeof myDate); // object


// diffrent representation of dates:-
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 12:00:00 AM

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString()); // Sat Jan 14 2023
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString()); // Sat Jan 14 2023
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

// Time stamps:-
let myTimeStamp = Date.now()

// console.log(myTimeStamp); //-> 1703242985176 m/s
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

//cosemise the methode 
newDate.toLocaleString('default', {
    weekday: "long",
    
})
