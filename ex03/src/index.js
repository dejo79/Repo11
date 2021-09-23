var myPetsArray = ["Dog", "Cat"];
myPetsArray.shift(0);

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myNewPets.push("Bird");
    myNewPets.push("Fish");
    var firstPet = "Bird";
    var lastPet = "Fish";
    myNewPets.unshift("Lion");
    myNewPets.pop(3);
    return myNewPets;

}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;