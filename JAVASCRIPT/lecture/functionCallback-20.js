/* javascript object method */

/* is() method */

{
 let obj1 = [10, 20 ,30 ,40]

 let obj2 = [10, 20 ,30 ,40]

 let Is = Object.is('obj' , 'obj')

 console.log(Is);

 let Is2 = object.is('obj' , 'obj')

 console.log(Is2);

 let Is3 = object.is([] , [])

 console.log(Is3);
}

/* object.getowenpropertyNames() method */

const object1 = {
    a:1,
    b:2,
    c:3,
};

console.log(object.getowenpropertyNames(object1));
console.log(object.keys(object1));

/* object.fromEntries() method */

{
    let obj = new Map([["option-1" , 20] , ["option-2" , 30]])

    let DataEntries = object.fromEntries(obj) 

    console.log(DataEntries);
}

/* object.Defineproperties() method */

{
   let object = {}

   let props2 = object.definePrperties(
    object , {
        obj1:{
            name:"object",
            value:500
        },
        obj2:{
            value:100
        }
    }
   )
 
   console.log(object);

   let obj ={
    name:"object",
    value:20
   }

   let props = object.defineproperties(obj , {})

   console.log(obj);
}

/* object.prototype method */
{
let obj = []

let obj1 = {key:20 , key2:30 , Key:50 , key4: 100}

console.log(obj1.key1);

let Dataobject = object.create(obj1)


console.log(Dataobject.key2);

let protoobject = object.getprototypeOf(Dataobject)

console.log(protoobject === obj1);
}

/* javascript call back function */
// {
// function(){}
// function sayHello(){
//     console.log('hello');
// }

function sayHi(){
 console.log("Hi");
}

function sum (a , b , callback){
    callback()
    return console.log(a+b)
}

console.log(sum(10 , 20 , sayHello));
console.log(sum(30 , 40 , sayHi));

/* javascript arrow function */

function foo(){
    return console.log("this is basic function");
}

foo()

const foo = () => {return console.log(`this is arrow function`);}
foo()

const foos = () => console.log("this is arrow function");

foos()

const fo = a => a + a
console.log(fo(10));

const foo1 = (a , b)  => a + b

console.log(fool(10 , 20));






