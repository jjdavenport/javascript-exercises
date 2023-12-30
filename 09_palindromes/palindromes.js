const palindromes = function(a) {
const format = a.toLowerCase().replace(/[\W_]/g, '')
const reverse = format.split('').reverse().join('')
return format === reverse
}
// Do not edit below this line
module.exports = palindromes;
