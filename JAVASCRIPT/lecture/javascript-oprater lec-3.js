/* assignement oprater */

{
    let x = 10;
    let y = 20;


    ((x+=y) = (x = x +y ))

    let z = x+=y;
    console.log(z);
    console.log(x);
    let zz = x-=y;
    console.log(zz);   // x = x - y x = 30 - 20 = 10
    let zzz = x*=y;
    console.log(zzz);
    let zzzz = x/=y;
    console.log(zzzz);
    let zzzzz = x%=y;
    console.log(zzzzz);
    let zzzzzz = x**=y;
    console.log(zzzzzz);
}

/* comaparision oprater */

{
    let x = 20;
    let y = 10;

    let a = x == y;
    console.log(a);

    let b = x != y;
    console.log(b);

    let c = x === y;
    console.log(c);

    let d = x !== y;
    console.log(d);

    let e = x > y;
    console.log(e);

    let f = x >= y;
    console.log(f);

    let g = x < y;
    console.log(g);

    let h = x <= y;
    console.log(h);
}


    /* typeof oprater */

    let str = "skillqode";
    let num = 345632;
    let bool = true;
    let arry = []
    let obj = {}
    let big = 12345678n

    console.log(typeof(str));
    console.log(typeof(num));
    console.log(typeof(bool));
    console.log(typeof(arry));
    console.log(typeof(obj));
    console.log(typeof(big));

    /* string oprater */

    let x = 20;
    let y = "20";
    let zz = 20;
    let xx = 4;
    let yy = 2;


    let z = zz + zz + zz + y + x + y + x + x + x + zz - xx * yy / yy;
let zzz = yy/yy


console.log(z);
console.log(zzz);
console.log(1/0);
console.log(-1/0);
console.log("1"/0);
console.log("1"/"1");
console.log("1" + ("1" * 20));

// lecture end





    
    

