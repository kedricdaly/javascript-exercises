const palindromes = function (str) {

// clean up string
// https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
let clean = str.toLowerCase().replace(/[^\w]|_/g,'') // force lowercase and only keep EN-US alphanumeric

let backward = clean.split('').reverse().join('');

return backward == clean;
}

// Do not edit below this line
module.exports = palindromes;
