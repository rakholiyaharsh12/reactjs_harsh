/* javascript array and it's method */

{
    let array = [10 , 30 , 40 ,78 , 786]

    array[0]  = 30
    console.log(array);

    let Newarray = new Array (10 , 30 , 40 ,78 , 786)

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);

    console.log(typeof array);

    console.log(typeof Newarray);
}
{
    let array = [10]

    let Newarray = new Array(10)

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);
}

{
    let array = ["javascript" , 45 , false , undefined , null]

    console.log(array);

    console.log(array.length);

    console.log(array[0]);

    /* array push method */

    array.push("html")
    array.push("css")

    console.log(array);

    /* array unshift method */

    array.unshift("sass")
    array.unshift("tailwindcss")

    console.log(array);

    /* array pop method */

    array.pop()
    array.pop()

    console.log(array);

    /* array shift method */

    array.shift()
    array.shift()

    console.log(array);

    /* array tostring method */

    let string = array.toString()
    console.log(string);

    /* array reverse method */

    let reverse = array.reverse()

    console.log(reverse);

    /* array forEach method */

    array.forEach((item) => console.log(item))

    /* array concat method */

    {
        let array1 = [12, 45 , 678]
        let array2 = [true , false]
        let array3 = ["reactjs" , "nodejs"]

        let Newarray = array1.concat(array2 , array3)

        console.log(Newarray);
    }
}
