const number1 = 100;
const numder2 = 10;
let result = number1 + numder2;
console.log(result);

const firstname = 'Alta',
      lasttname = 'Kim';
let result2 = firstname + ' ' + lasttname;
console.log(result2);
      
    //number
const num1 = 22,
      num2 = 12.24;
    //infinity and Nan
let result3 = 'alta' * 3;
console.log(result3);
    //BigInt
let maxnum = Number.MAX_SAFE_INTEGER;
console.log(maxnum);
let numbig = 9007199254740991n;
console.log(numbig)
    //string
let fullname = `${firstname} ${lasttname}`;
console.log(fullname);
      //boolean
let var1 = true;
    //null
let empty = null;
    //undefined
let test;
console.log(test);
    //object
let user = {
    id: 1,
    name: 'Alichka',
    age: 21,
};
console.log(user);
    //symbol
let sym = Symbol();

console.log(typeof user);

if (10 > 9) {
    console.log('Ali');
}
    //switch case
const color = 'red';

switch (color) {
    case 'green':
        console.log('это зеленый')
        break;
    case 'r':
        console.log('Это красный')
        break;
    default:
        console.log('Очень странный выбор')
}

