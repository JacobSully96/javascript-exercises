
const sumAll = function (a, b) {

    let sum = 0;
    let start = a;
    let end = b;

    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    if (a > b) {
        start = b;
        end = a;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
        // console.log(i);
    }


    return sum;

};
// console.log(sumAll(1, 4));
// console.log(sumAll(1, 4000));
// console.log(sumAll(123, 1));
// sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
