/* javascript number method */
{
// let newNumber = false;

console.log(typeof newNumber);

let convertNum = Number(newNumber);

console.log(convertNum);

console.log(typeof convertNum);
}

/* number method */
{
let Num = 10;

let StringNum = Num.toString()

console.log(StringNum);

console.log(typeof StringNum);
}

{
  let Num = 248.678999;

  let Num1 = Num.toPrecision();

  console.log(Num1);

  let Num2 = Num.toPrecision(6)

  console.log(Num2);

}

{
        let Num = 56.7898

        let Num1 = Num.toFixed();

        console.log(Num1);

        let Num2 = Num.toFixed(4)

        console.log(Num2);

}

{
  let Num = 250000

  let Num1 = Num.toExponential();
  console.log(Num1);

}

{
  let Num = 23232323232;

  let Num1 = Num.toLocaleString()
  let Num2 = Num.toString()

  console.log(Num1);

  console.log(typeof Num1);
  console.log(Num2);

}

{
let Num = "10";

console.log(Num(Num));

let Num1 = "10 10"

console.log(Number(Num1));
console.log(Number.Num1);

let Num2 = "10 items"

let CoNum = Number("10 items")

console.log(Number(Num2));

console.log(CoNum);

}

{
  let Num = (15+5)+"4"

  let Num1 = Num.valueOf();

  console.log(Num1);
}
{

  let Num = 145;

  let Num1 = Number.isFinite(Num)

  let Num2 = Number.isSafeInteger(Num)

  let Num3 = Number.isInteger(Num)

  console.log(Num1);

  console.log(Num2);

  console.log(Num3);


}

/* javascript data() object */

/* 1 jan 1970 */

//  Month 0 to 11 

const now = new Date()

console.log(now);

console.log(typeof now);

console.log(now.toDateString());

console.log(now.toISOString());

console.log(now.toJSON);

console.log(now.toLocaleDateString);

console.log(now.toLocaleString);

let now1 = now.toString()

console.log(now1);

console.log(typeof now1);

console.log(now.toTimeString());

console.log(now.toUTCString());


