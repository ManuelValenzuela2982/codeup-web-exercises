var username = prompt('Enter your username').toLowerCase()
var password = prompt('Enter your password').toLowerCase()
var currUsername = "username"
var currPassword = "password"
if (username === currUsername && password === currPassword){
    alert("you have logged in")
}else if{
    alert("invalid password")
    }

var isRaining;
isRaining = confirm("is it raining?")
alert((isRaining) ? "wear a jacket, it's raining": "nope, take a hike");

var favMovie = prompt("what's your favorite movie").toLowerCase();

switch(favMovie){
    case "toy story":
        alert("I despise this movie");
        break;
    case "lion king":
        alert("mid");
        break;
    case "back to the future"
        alert("I dont know who likes this but he must be a cool guy");
        break;
