/* javascript object and it's method */

{
    //const obj = {id:1 , firstname:"john", lastname:"doue" , gender:"male", age:25}
    //const obj = new Object()

    console.log(obj);
    console.log(obj);


    let Data = obj.firstName

    let Date1 = obj["id"]
    console.log(Data);
    console.log(Date1);

    obj.address = "united states"

    console.log(obj);

    obj.id = 2

    console.log(obj);

}

/* object method :- objetc.assign() method */

{
    const obj = {id:1 , firstName:john , lastName:"doue",gender:"male" , age:25}
    const num = {key1:56 ,Key2:23 , key3:36 , Key4:100}

    let Assign = Object.assign(obj , num)

    console.log(Assign);

    console.log(obj);

    let Assign1 = Object.assign({} , num ,obj)
    console.log(Assign1);
}

/* object method :- object.freeze() method */

obj.id = 19;

console.log(obj);

let data = object.freeze(obj)

console.log(obj);

obj.id = 30

console.log(obj);

obj.key1 = 100

console.log(obj);


/* object method: object.create() method */

const obj = {
    id:1,
    firstName:"john" ,
    lastName:"doue",
    gender: "male" ,
    age:25,
    newObj:function(){
        console.log(`my first name is $(this.firstName)and i am $(this.occupation)`);
    }
}
{
let NewObject = object.create(obj)

NewObject.occupation = "Developer"

console.log(newobject.occupation);

console.log(newobject.newobj());

console.log(obj);
}