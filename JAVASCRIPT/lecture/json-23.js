/* asyncronous function */
// setTimeout

function greet(a , b){
    console.log(a + b);
    return a + b;
}

setTimeout(greet , 5000 ,10 , 20)
// setInterval

function greet(a , b){
    console.log(a + b);
    return a + b
}

setInterval(greet , 5000 ,10 , 20)


/* cleartimeout , clearinterval */

let settimed = setTimeout(function (){
    console.log("hello");
}, 5000)

console.log(setTimeout);

console.log(settimeId);

/* clear timeout */

function greet(){
    console.log(10 + 20);
}

let settimeId = setTimeout(greet , 5000)

console.log(settimeId);

clearTimeout(settimeId)

/* clearinterval */

let count = 0;

let setIntervalId = setInterval(function(){
    count+=1;

    if(count == 5){
        clearInterval(setIntervalId)
    }
    console.log(count);
} , 3000)


/* this keyword in javascript */

/* this in global scope */

let firstName = this

console.log(firstName);


/* this in inner function */

function greet(){
    console.log(this);
}

greet()

/* this is inner object */

const profile = {
    firstName:"jack",
    age:23
}