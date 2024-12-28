const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const validString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');
    
    const reversedString = validString.split('').reverse().join('');
    
    return validString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
