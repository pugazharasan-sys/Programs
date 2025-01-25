
// ! output methods

console.log("I am External js file"); //prints in console

document.write(" hello "); //prints in ui

// alert("hello"); popup message


// ! how to declare variable

// var, let , const

var a = 10;
console.log(a);

let b =20;
console.log(b);

const c = 30;
console.log(c);


//? in var keyword re-decalaration is possible

var a = 100;
console.log(a);


//? in let keyword re-declaration is not possible

// let b = 200;
// console.log(b);


//! notes: for const we have to do the variable declaration and initialization in the same line

let myName;

myName = "pugazh";
console.log(myName);



//! datatypes


//! primitive datatype

// number , boolean , string , undefined , null , bigint

//! non primitive datatype

// array , object , function


//! Number

let num1 = 20;

console.log(num1);

//! typeof operator is used to know the datatype

console.log(typeof num1);

let num2=20.8;

console.log(typeof num2);

//! boolean

let isPlayer = true;

console.log(typeof isPlayer);


//! String

let str1 = 'hello';
let str2 = "hello";
let str3 = `hello`; //back tick

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

//! undefined

// when any variable is declared but not initialized then it is called as undefined

let empName;

console.log(empName);
console.log(typeof empName); // type of undefined is undefined


//! null

let sal = null;

console.log(sal);
console.log(typeof sal); //type of null is object


//! bigint

let bigNumber = 2n;

console.log(bigNumber);
console.log(typeof bigNumber); //type of bigint is bigint




//! Non-Primitive Datatype

//! Array

let arr = [10,"hello",true, null, undefined,[20,80]]



//! object

let student = {

    sname:"pugazh",
    sid:1081,
    isPlayer:false,
    skills:['java', 'html'],
    add:{
        city:"chennai",
        pin:123456
    }

}

console.log(student);



//! function

function display()
{
    console.log("I am display function");
}

display();