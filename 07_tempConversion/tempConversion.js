const convertToCelsius = function(f) {

  let temp = Math.round(((f - 32) * 5/9) * 10) / 10;
  return temp;

};

const convertToFahrenheit = function(c) {

  let temp = Math.round((c * 9/5 + 32) * 10) / 10;
  return temp;

};



// F = (C) * 9/5 + 32
// C = (F - 32) * 5/9
// the additional * 10 then / 10 is to get the single decimal place for some cases


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
