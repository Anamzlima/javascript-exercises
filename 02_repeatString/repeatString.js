const repeatString = function(word, times) {
    if (times < 0) {
        return 'ERROR';
    } else if(times === 0 || word == '') {
        return '';
    } else {
        return word.repeat(times);
    }
};

// Do not edit below this line
module.exports = repeatString;
