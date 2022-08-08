'use strict'
//Exercise 1
do {
    var number = prompt("enter a number between 1 and 50");
    for(var i = 1; i <= 50; i++){
        if (i % 2 !== 0) {
            console.log(`yikes! skipping number: ${i}`)
        }else if (i % 2 === 0) {
            console.log(`Here is an odd number: ${i}`)
        }
    }
}while (isNaN(number) || number % 2 === 0 || number < 1);