const sumAll = function(num1, num2) {
    const isInteger = Number.isInteger(num1) && Number.isInteger(num2);
    const isNumber = typeof num1 === 'number' && typeof num2 === 'number';
    const isNegative = num1 < 0 || num2 < 0;
    if (isNegative || !isInteger || !isNumber) {
        return 'ERROR';
    }
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
