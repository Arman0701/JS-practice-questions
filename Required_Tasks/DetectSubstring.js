'use strict'

function detectSubstring(str, sub, caseSensitivity = false) {
    if (!caseSensitivity){
        str = str.toLowerCase();
        sub = sub.toLowerCase();
    }
    for (let i = 0; i <= str.length - sub.length; i++){
        if (str.slice(i, i + sub.length) === sub) return true;
    }
    return false;
}   

console.log(detectSubstring('surname', 'Name', true))
console.log(detectSubstring('surname', 'na'))
console.log(detectSubstring('surname', 'ne'))
console.log(detectSubstring('surname', 'me'))
console.log(detectSubstring('surName', 'name'))