var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(arr) {
    var myItems = [...arr];
        myArr[2] = 6;
        return myArr;
    
}
console.log(myArrayFunction(myArr));
module.exports = myArrayFunction;