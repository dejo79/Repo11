var temps = [
    monday = [31,32,19,37],
    tuesday = [29,27,55,36],
    wednesday = [17, 27, 42, 46],
    thursday = [29, 52, 21, 64],
    friday = [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    var monday; for (monday = 0; monday < 5; monday++);
    var tuesday; for (tuesday = 0; tuesday < 5; tuesday++);
    var wednesday; for (wednesday= 0; wednesday < 5; wednesday++);
    var thursday; for (thursday = 0; thursday < 5; thursday++);
    var friday; for (friday = 0; friday < 5; friday++);
    averageDayTemp.push(monday);
    averageDayTemp.push(tuesday);
    averageDayTemp.push(wednesday);
    averageDayTemp.push(thursday);
    averageDayTemp.push(friday);
    return averageDayTemp;
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;