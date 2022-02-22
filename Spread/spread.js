//SPREAD IN FUNCTION CALLS ***********************************************************
const nums = [13, 3, 55, 65, 3453, 465, 4576, 34, 26, 74, 2, 5, 7, 3, 7, 8];

Math.max(nums); //NaN
Math.max(...nums); //4576




//SPREAD WITH ARRAY LITERALS ******************************************************
const cats = ["Blue", "Scout", "Rocket"];
const dog = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dog, "Random"];





//SPREAD WITH OBJECTS *****************************************************************
const feline = {
    legs: 4,
    family: "Felidae",  
};

const canine = {
    isFurry: true,
    family: "Caninae"
}

const catDog = {
    ...feline,
    ...canine
}


//SPREADING ARRAYS INTO OBJECTS ****************************************************************
const xArray = ["Hi", "Hello", "Hola"];

const xArrObject = {
    ...xArray
}