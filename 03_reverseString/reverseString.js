const reverseString = function(string) {
    let arr = [];
    let returnstr = "";
    for (letter of string) {
        arr.push(letter);
    }

    for (let i = arr.length-1; i >= 0; i--) {
        returnstr+=arr[i];
    }

    return returnstr;
};

// Do not edit below this line
module.exports = reverseString;
