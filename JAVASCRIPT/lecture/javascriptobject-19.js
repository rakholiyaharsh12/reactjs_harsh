/* javascript object method */

/* isForzen method */

{
    // let obj = {key1:56 , key2:65, key3:98 , key4:100}

    //obj.key1 = 20

    //delete obj.key1

    // object.freeze(obj)

    // obj.key1 = 40

    // delete Obj.key2

    let Data = object.isFrozen(obj)

    // console.log(obj);

    console.log(Data);

}

/* object.seal() method */

{
    let obj = {key1:56 , key:65, key3:98 , key4:100}

    object.seal(obj)

    delete obj.key1

    console.log(obj);

    let Data = object.issealed(obj)

    console.log(Data);
}

/* hasown() method */

let obj = {key1:"jaavscript", key2:"html" , key3:"bootstrap5" , key4:"nodejs"}

for (const [key , value]of object.entries(obj)){
    console.log(`this object key are ${key} and it's value is $(value)`);  
}

let array = [12,24,15,68,69]

for(const value of array){
    console.log(`${value}`);
}

/* object.keys() */

{
let obj = {key1:"javascript" , key2:"html" , key3:"bootstrap5" , key4:"nodejs"}

let Data = object.keys(obj)

console.log(Data);
}

/* object.value() method */
{
    let obj = {key1:"javascript" , key2:"html" , key3:"bootstrap5" , key4:"nodejs"}
     
    let Data = object.values(obj)

    console.log(Data);
}

/* object.groupBy() */

let grosserys = [
    {name:"potato" , type:"vegitable", price:40 , quntity:25},
    {name:"ladyfingures" , type:"vegitable", price:20 , quntity:30},
    {name:"mango", type:"fruit" , price:1200 , quntity:5},
    {name:"orange", type:"fruit" , price:200 , quntity:0},
    {name:"fish", type:"meat" , price:2000 , quntity:10},
    
]

console.log(grosserys);

let Data = object.groupBy(grosserys , ({name}) => name)

console.log(Data);

let Data1 = object.groupBy.groupBy(grosserys , ({type}) => type)

console.log(Data1);

function stock({quntity}){
    return quntity > 10 ? "enough stock" :"restock"

}

let Data3 = object.groupBy(grosserys ,stock)

console.log(Data3);