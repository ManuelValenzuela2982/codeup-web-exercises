//Exercise 1
var num = 2;
while(num < 65536){
    num *= 2;
    console.log(num);
}

//Exercise 2
var allCones = Math.floor(Math.random() * 50)+ 50;
do{
    var soldCones = Math.floor(Math.random() * 5) + 1;
    if(soldCones <= allCones){
    console.log(`${soldCones} cones have been sold`)
    allCones -= soldCones
    }else if (soldCones >= allCones) {
        console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}...`)
    }
}while(allCones !== 0);
    console.log("I've sold all the cones")