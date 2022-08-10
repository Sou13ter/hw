'use strict'

/*
Description: to suggest an algorithm of verifying if the number is a prime number
File name: isPrime.test.js
*/

function isPrime(a) {
    if (a > 0 && a <= 3 || a % 2 !== 0 && a % 3 !== 0) {
        return true
    }
    return false
}


let a = isPrime(3) // true
console.log(a)
a = isPrime(6) // false
console.log(a)
a = isPrime(7) // true
console.log(a)
a = isPrime(12) // false
console.log(a)

let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isPrimeArray(array) {
    let res = []
    for (let i = 0; i < b.length; i++)
    if (array[i] > 0 && array[i] <= 3 || array[i] % 2 !== 0 && array[i] % 3 !== 0) {
        res.push(i)
    }
    return res
}

console.log(isPrimeArray(b))