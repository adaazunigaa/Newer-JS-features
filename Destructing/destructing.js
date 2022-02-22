//DESTRUCTURING ARRAYS ******************************************************
const scores = [4587, 1245, 8746, 4125, 8944, 1154, 4875];

//destructing the arrays
const [gold, silver, bronze, ...everyoneElse] = scores;





//DESTRUCTURING OBJECTS ******************************************************
// const user = {
//     email: "sample.email@something.com",
//     password: "randomPassword123",
//     firstName: "Name",
//     lastName: "LastName",
//     born: 1983,
//     bio: "Somenthing something something something",
//     city: "California",
//     state: "California"
// }

//const {email, city, state, born: birthDate} = user;


const user2 = {
    email: "sample2.email@something.com",
    firstName: "Name2",
    lastName: "LastName2",
    born: 1993,
    city: "Dallas",
    state: "Texas"
}



const {city, biography = "hi hello something something", state: Stateee} = user2;
