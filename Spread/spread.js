const nums = [13, 3, 55,65, 3453,465,4576,34,26,74,2,5,7,3,7,8];

Math.max(nums); //NaN
Math.max(...nums); //4576




//SPREAD WITH ARRAY LITERALS ******************************************************
const cats = ["Blue", "Scout", "Rocket"];
const dog = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dog, "Random"];
