function sum(...nums){
    //console.log(nums);
    //willa add all the parameters passed in
    return nums.reduce((total,el) => total + el)
}


function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD goes to ${gold}`);
    console.log(`SILVER goes to ${silver}`);
    console.log(`and THANKS to ${everyoneElse}`);
}