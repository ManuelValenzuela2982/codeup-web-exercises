"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    if (color === "blue"){
        return "the color of the ocean is blue";
    }else if (color === "red"){
        return"the color of my blood is red";
    }else if (color === "yellow"){
        return "the color of sunflower pedals is yellow";
    }else{return "im not familiar with that color"}
}
console.log(analyzeColor('blue'))
console.log(analyzeColor('red'))
console.log(analyzeColor('yellow'))
console.log(analyzeColor('cyan'))








// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("random color:" + randomColor);
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
var color = prompt("What is your favorite color?");

function analyzeColor(color){
    switch(color){
        case "red":
            return
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("What is your favorite color?");

function analyzeColor(color){
    switch (color){
        case "red":
            return "apples are red";
        case "blue":
            return "the ocean is blue";
        default:
            return "I'm not familiar wit that color";
    }
}

alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, total){
    switch (luckyNum) {
        case 0: return total;
        case 1: return total - (total * 0.10)
        case 2: return total - (total * 0.25)
        case 3: return total - (total * 0.35)
        case 4: return total - (total * 0.50)
        case 5: return "FREE"
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
var
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//1. make a confirm that asks if a suer would like to input a number
//2. assign confirm in a variable
//3. if confirm variable is true then prompt a suer for a number and store it in a variable and wrap number
//4. alert the number as even or odd
//5. add the alert number to a function
//6. check if number is negative or positive and return the value
//7. if user input is not a number then inform that the input was not a number
//  -use is NaN

var isTrue = confirm("Would you like to give me a number");
if(isTrue){
    var thatNumber = prompt("give me that number");
    if(isNaN(thatNumber)) {
        alert("this is not a number");
    }else{
        if (thatNumber % 2 === 0) {
            alert("That number sure is even")
        }else if(thatNumber % 2 !== 0) {
            alert("That number seems a little less odd to me");
        }
        var newNumb = thatNumber + 100;
        alert('${thatNumber} + 100 = ${newNumber}')
        if(thatNumber < 0) {
            alert("That number is negative")
        }else if(thatNumber > 0){
            alert("That number is positive")
        }
    }