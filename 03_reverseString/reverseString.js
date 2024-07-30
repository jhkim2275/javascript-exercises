const reverseString = function(str) {
    let stringArray = str.split("");
    let ret = "";
    for (let i = stringArray.length-1; i>=0; i--){
        ret+=stringArray[i];
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
