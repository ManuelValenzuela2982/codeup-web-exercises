'use strict'

//Exercise 2
//with some practice I came up with this
// function showMultiplicationTable(number) {
//     return equals;}{
//     for (var i = 0; i < 11; ++i) {
//         var number = i
//         var equals = (7 * i)
//         console.log('7 x', i, '=', equals,);
//     }
// }
function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " +(number*i));
    }
}
showMultiplicationTable(7);

//Exercise 3
for( var i = 1; i <= 10; i++){
    var randomNum = Math.floor(Math.random() * 180) + 20;
    if(randomNum % 2 === 0){
        console.log(`${randomNum} is even`);
    }else if(randomNum % 2 !== 0){
        console.log(`${randomNum} is odd`);
    }
}

//Exercise 4
for ( var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i))
}

//Exercise 5
for( var i = 100; i >= 5; i-= 5) {
    console.log(i)
}