/* javascript string method */

/* string toUpperCase and toLowerCase */

{
    // let str = "Dog os very danger and dog is honest but cat is very cute and cat is lazy!"

    // let Upperstr = str.toUpperCase()

    // let Lowerstr = str.toLowerCase()

    //console.log(UpperStr);

    //console.log(LowerStr);


}

/* string slice and substring method */

{
    let str = "this is morning upon us!"

    let SliceStr = str.slice(10)
    let slicestr = str.slice(0)
    let sliceStr = str.slice(-10)

    let sliceStr1 = str.slice(10 , 22)
    let sliceStr2 = str.slice(10 , -5)


    console.log(sliceStr1);

    let substr = str.substring(10 , -20)
    let substr1 = str.slice(10 , -5)

    console.log(substr);
    console.log(substr1);


    /* javascript replace and replaceAll method */

    /*
      replace(Regx)
      replaceAll(Regx)
    */

      {
        // let str = "Dog is very danger and Dog is dog honest very Cute and Cat is Lazy!"

        // let replaceStr = str.replace("Dog" , "Cat")
        
        // let replaceStr = str.replace("dog" , "cat")

        // let replaceStr = str.replace(/dog/gi ,"cat")

        // console.log(replaceStr);

        // let replaceAll = str.replaceAll("Dog" , "Cat")
        // let replaceAll = str.replaceAll(/Dog/gi , "Cat")

        // console.log(replaceAll);

      }

      /* javascript charcodeAt() */

      {
        let str = "Hello";

        // let charStr = str.charcodeAt(10)
        let charStr = str.charCodeAt(2)

        let repeatStr = str.repeat(2)

        console.log(charStr);
        console.log(repeatStr);
      }




    


}