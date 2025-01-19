const leapYears = function(num) {
    d = num % 4;
    if(d == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
