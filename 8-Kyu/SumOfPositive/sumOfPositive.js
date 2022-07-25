
const positiveSum = arr => arr.reduce( (previousValue, currentValue) =>{return previousValue + ( (currentValue > 0) ? currentValue : 0 )},0);
console.log( positiveSum( [1,-2,3,4,5] ))