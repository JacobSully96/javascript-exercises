const removeFromArray = function (array, ...toRemove) {

    const newArray = [];

    array.forEach(element => {
        
        if(!toRemove.includes(element)){
            newArray.push(element);
        }

    });
    return newArray;
};

// console.log(removeFromArray([1, 2, 3, 4], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
