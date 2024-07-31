const leapYears = function(year) {
    let ans = false;
    if (year%4 ==0) {ans = true;}
    if (year%100 == 0) {ans = false;}
    if (year%400 == 0) {ans = true;}
    return ans;
};

// Do not edit below this line
module.exports = leapYears;
