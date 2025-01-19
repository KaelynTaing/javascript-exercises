const removeFromArray = function(array, num) {
    let newarr = [];
    
    for(let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            continue;
        } else {
            newarr.push(array[i]);
        }
    }

    return newarr;
}

// Do not edit below this line
module.exports = removeFromArray;
