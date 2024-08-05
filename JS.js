console.log('My First Code'); //My First Code

//Variables
a=5; //Without declration
var a =5; //Using var
console.log(a);


{
    var a=34;   //Block 2
    console.log(a);
}

var a=67;
console.log(a);

let b=56;        //Using let
{
    var a=34;   
    console.log(a);
    let b=90;
    console.log(b);
}
console.log(b);

const n = 100;        //Using const
{
    const n =77;
    console.log(n);
}
console.log(typeof(n));         //Using type()

var firstName ='jude'
console.log(typeof(firstName)); //string

let bool =true;
console.log(typeof(bool));  //boolean

var g;
console.log(typeof(g));  //undefined

var g = '';
console.log(typeof(g));  //null value is string

//Array
var arr1=['a','b','c','d',10];
console.log(arr1);  //o/p -['a','b','c','d',10]

var arr1=['a','b','c','d',10];
console.log(arr1[1]);  //o/p -b

var arr1=['a','b','c','d',10];
console.log(arr1.length);  //length of array -5

var arr1=['a','b','c','d',10];
arr1.push('rosewood');
console.log(arr1);  //push is for adding another element into the string

var arr1=['a','b','c','d',10];
arr1.push('rosewood');
arr1.pop();
console.log(arr1);  //push is for removing last element in the string

//Objects
// let person={
//     fname:'maya',
//     age:80,
//     location:'tvm'
// }
// console.log(person.age);

// let person=new Object();
// person.fname='miya';
// person.age=22;
// console.log(person);

let car=new Object();
car.fname='audi';
car.wheel=4;
console.log(car);

//Array of Objects
var arr2=[{
    fname:'maya',
    age:80,
    location:'tvm'
},{
    fname:'jude',
    age:26,
    location:'ktm'
}]
console.log(arr2[1].age);

//Functions
function display(fname) {
    console.log('welcome'+fname+'tofunctions');
}
display('jude');//Function call 

//Function to add
function add_val(a,b){
  var sum=a+b;
  //console.log(sum)
  return sum;
}

//add_val(10,20)
var result=add_val(10,20);
console.log('the sum is'+result);

var ab=7;
var abc=ab++; //post increment
console.log(ab);
console.log(abc);
var exp =(4*7)-8^2+9;
console.log(exp);

var exp =(4*7)-8**2+9;
console.log(exp)
//conditional ststements
if (exp>0)  {
    console.log('value is greater than zero')
} 
else if(exp==0){
    console.log('value is equal to zero')
}
else {
    console.log('value is less than zero')
};

var tt =56;
var tm ='56';
//conditional ststements
if (tm>tt)  {
    console.log('value is greater')
} 
else if(tm===tt){
    console.log('value is equal')
}
else {
    console.log('value is less')
};

var result1=exp>0?  'value is greater than zero ': 'value is less than zero';
console.log(result1); //ternary operator, which is nothing but else if 

var result1=exp>-30?  'value is greater than zero ': 'value is less than zero';
console.log(result1);

//Looping Statements
//print numbers 1 to 10
for (let i = 0; i < 10; i++) {
    console.log(i+1);
    
}

//print contents inside array
var array = [1,3,5,7,9];
let len = array.length;
for (let i = 0; i<len; i++)
    console.log(array[i]);
//or 2 way
var array = [1,3,5,7,9];
for (let i = 0; i=array.lenth; i++)
    console.log(array[i]);

//for in loop
var obj={fname:'jude',age: 26, place: 'ktm'}
for (const i in obj) {
    console.log(i);
};

// //for of loop
// var obj={fname:'jude',age: 26, place: 'ktm'}
// fpr (let i of obj){
//     console.log(i);
// }

//while loop
// let i =1;
// while (i<=10) {
//     console.log(i);
//     i++;
// };

// let i =0;
// while (i<10) {
//     console.log(i+1);
//     i++;
// }

//do while loop
let r = 1;
do {
    console.log(r);
    r++;
} while (r<=10);














