'use strict'

function upper(str){
    return str.trim()
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ');
}

console.log(upper(' i love you, baby...   '));