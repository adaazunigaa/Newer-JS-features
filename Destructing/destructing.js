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



const { city, biography = "hi hello something something", state: Stateee } = user2;














//DESTRUCTURING PARAMETERS**************************************************************
// function fullName(user2){
//     return `${user2.firstName}, ${user2.lastName}`;
// } 

// function fullName(user2){
//     const {firstName, lastName} = user2;
//     return `${firstName}, ${lastName}`;
// } 

function fullName({ firstName, lastName } ) {
    return `${firstName}, ${lastName}`;
}




//other sample
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


// movies.filter((movie) => movie.score >= 90);
// movies.filter(({ score }) => score >= 90);


// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
});