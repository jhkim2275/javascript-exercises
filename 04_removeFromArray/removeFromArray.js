const removeFromArray = function(arr, item) {
    let index = -1;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] == item){
            index = i;
        }
    }
    let ret = Array(arr.length-1);
    let newIndex = 0;
    for (let i = 0; i<arr.length; i++){
        if (i != index) {
            ret[newIndex] = arr[i];
            newIndex++;
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
