/* javascript array method */

/* 
SHIFT
FILTER
MAP
indexof
lastIndexof
slice
splice
sort
copywithin
entries()
keys()
values()


/* saturday */
/* 
 fill
 some
 every
 reduce
 reduceRight
 find
 findIndex
 findLastINdex
 include
 Array.isarray
 flat
 flatmap
*/

/* shift method in array */

//
{
 let array = ["javascript" , "jquery" , "html" , "css" , "bootstrap" , "sass", "tailwincss" ,"nodejs"]

 console.log(array);

 array.shift()
 array.shift()
 array.shift()
console.log(array);
}

/* FILTER METHOD IN ARRAY */
{
    let array = ["javascript" , "jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "nodejs"]

    let filter = array.filter((any) => any == "javascript")

    console.log(filter);

    let arrayobject = [
        {id:1 , item:"mobile" , name:"iphone13" , color:"gray" , price:89000 ,discount:"10%", 
        storage:"128Gb"},
        {id:1 , item:"mobile" , name:"iphone13" , color:"white" , price:89000 ,discount:"10%", 
        storage:"256Gb"},
        {id:1 , item:"mobile" , name:"iphone14" , color:"gray" , price:89000 ,discount:"20%", 
        storage:"128Gb"},
        {id:1 , item:"mobile" , name:"iphone14" , color:"gray" , price:89000 ,discount:"20%", 
        storage:"256Gb"},
        {id:1 , item:"mobile" , name:"iphone15" , color:"green" , price:89000 ,discount:"20%", 
        storage:"128Gb"},
        {id:1 , item:"mobile" , name:"iphone15" , color:"green" , price:89000 ,discount:"5%", 
        storage:"256Gb"},


        {id:1 , item:"laptop" , name:"dell" , color:"gray" , price:89000 , discount:"10%"},
        {id:1 , item:"laptop" , name:"dell" , color:"black" , price:45000 , discount:"5%"},
        {id:1 , item:"laptop" , name:"dell" , color:"black" , price:65000 , discount:"10%"},
        {id:1 , item:"laptop" , name:"iphone" , color:"gray" , price:89000 , discount:"10%"},
        {id:1 , item:"laptop" , name:"iphone" , color:"gray" , price:89000 , discount:"10%"},
        {id:1 , item:"laptop" , name:"iphone" , color:"gray" , price:89000 , discount:"10%"},
        {id:1 , item:"pandrive" , name:"hp" , color:"gray" , price:2000 , discount:"10%"},
        {id:1 , item:"pandrive" , name:"hp" , color:"gray" , price:2000 , discount:"10%"},
        {id:1 , item:"pendrive" , name:"sandisk" , color:"red" , price:1000 , discount:"10%"},
 ]
 let filter1 = arrayobject.filter((data) => data.item ==="laptop")
 console.log(filter1);

 let filter2 = arrayobject.filter((data) => data.item ==="red")
console.log(filter2);
 
}

/* Map Method In Array */
{
    let num = [10 , 45 , 67 , 42 , 89]

    let Map = num.map((data) => data = 100)
    console.log(Map);
}

/* indexOf And LastIndexOf Method in Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]

    let Index = array.indexOf("css" , 4);

    let IndexLast = array.lastIndexOf("css" , 6);

    console.log(Index);

    console.log(IndexLast);
}

/* Slice And Splice Method in Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]

    let Slice = array.slice(2)

    let Slice1 = array.slice(2 , 5)

    console.log(Slice);
    
    console.log(Slice1);

    let Splice1 = array.splice( 2 , 2 , "expressjs" , "SQL" )

    console.log(Splice1);

    console.log(array);
}

/* sorting in Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]

    let num = [12 , 52 , 25 , 46 , 78 , 12 , 36 , 5 , 9]

    let sort = array.sort()

    let Num = num.sort((a , b) => a - b)

    console.log(sort);

    console.log(Num);
}

/* entries() , keys() , values() , method in array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]
    let Entries = array.entries()

    console.log(Entries.next().value);
    console.log(Entries.next().value);
    console.log(Entries.next().value);

    let Keys = array.keys();

    console.log(Keys.next().value);
    console.log(Keys.next().value);
    console.log(Keys.next().value);
    console.log(Keys.next().value);

    let Values = array.values()

    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
    console.log(Values.next().value);
}

/* CopyWithin method In Array */

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "sass" , "tailwindcss" , "css" , "nodejs"]
    console.log(array);

    let copy1 = array.copyWithin(3)
    console.log(copy1);

    let copy2 = array.copyWithin(2 , 5)
    console.log(copy2);

    let copy3 = array.copyWithin(2 , 4 , 6)
    console.log(copy3);
}