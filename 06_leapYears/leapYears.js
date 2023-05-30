const leapYears = function(year) {

    if(year % 400 === 0){
        return true;
    }else if(year % 100 === 0){
        return false;
    }else if(year % 4 === 0){
        return true;
    }else{
        return false;
    }

};

// Divisible by 4 Leap Year
// Divisible by 100 NOT Leap year ENLESS divisible by 400


// Do not edit below this line
module.exports = leapYears;
