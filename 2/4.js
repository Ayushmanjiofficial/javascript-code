// const tinderUser = new Object() // Singleton obj.
const tinderUser = {} // non-singleton obj.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //-> { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //-> hitesh

// Concatinating:-
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 } //-> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } // same problem as array obj. in obj.
// const obj3 = Object.assign({}, obj1, obj2, obj4)// {} is use to represent target and other are sources.But it is optmal

// const obj3 = {...obj1, ...obj2} // combining all key value of obj1 and obj2.
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email) //-> h@gmail.com


// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //-> [ 'id', 'name', 'isLoggedIn' ] // give all the key of the obj.
// console.log(Object.values(tinderUser)); //-> [ '123abc', 'Sammy', false ] // give all the value of the obj.
console.log(Object.entries(tinderUser)); //-> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] // give all the key-value pair of the obj.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check the property(key) are there in obj. //-> true

// Destructuring of obj1.:-

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor) //-> hitesh

const {courseInstructor: instructor} = course // destructuring
// console.log(courseInstructor); //-> hitesh
console.log(instructor); //-> hitesh

// API->JSON structure:-
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
