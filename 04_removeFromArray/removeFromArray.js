const removeFromArray = function(array, toRemove) {
 
    newArray = [];

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] === toRemove){
        array.splice(i, 1);
        }
        newArray[i] = array[i];
    }

    return newArray;
  
};

// Do not edit below this line
module.exports = removeFromArray;
