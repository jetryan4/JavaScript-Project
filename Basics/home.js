console.log('hello');
// console.log('hello');
// alert('watch out');
var b = 'jetryan4';
var r = 43;

console.log(b);
console.log(r);


// var hair = prompt("what is your hair color?");

// document.getElementById('chicken').innerHTML = hair;

// Numbers in JS

var num = 5.3;
num = num + 1;
num++;
console.log(num);
console.log(5*4);

//div mult and mod

console.log(num/3);

// increment dec by any

num-=2;
console.log(num);

function fun() {
    console.log('This is a function');
}

fun();

// var n = prompt('What is you name?');

function namefun(na) {
    console.log('Hello %s', na); // printf
    console.log('Hello ' + na); // string concatination
}

// namefun(n);

 // working with arguements

 function sum1(n1, n2) {
     var resu = n1 + n2;
     console.log(resu);
 }

 // nu1 = prompt('number 1 please');
 // nu2 = prompt('number 2 please');

 // sum1(nu1,nu2);
 sum1(4,3);

 // while loops

 var numb = 0;
/*
 while (numb < 100) {
     console.log(numb++);
 }
for (let q = 0; q < 100; q++) {
    console.log(q);
}
*/
// Data types
let age = 10;
let namef = "Bob";
let name = {first: "jet", last: "ryan"}; //obj
let boolval = true; // bool
let list = ["q", "e", "e"]; // list or array
let randomvalue; // undefined
let nothing = null; // null value

let fruit = 'banana';
let morefruit = 'banana\napple';

console.log(fruit.length);
console.log(morefruit.indexOf('p'));
console.log(fruit.slice(1,3));
console.log(morefruit.replace('pp', '34'));
console.log(fruit.toUpperCase());
console.log(morefruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(morefruit[2]);
console.log(fruit.split('a'));

// Arrays

let fruittypes = ["apple", "berries", "oranges"];
fruit = new Array('banana', 'pear', 'grape');

console.log(fruit)

for(let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

//array methods
console.log('to string', fruit.toString());
console.log(fruit.join('0'));

console.log(fruit.pop(), fruit)
console.log(fruit.push('huckleberry'), fruit);

console.log(fruit[3]);

fruit[fruit.length] = 'jumberry';
console.log(fruit);
fruit.shift();
console.log(fruit);
fruit.unshift('kiwi');
console.log(fruit);
let veg = ['tomato', 'celery'];
let garden = fruit.concat(veg);
console.log(garden);
console.log(fruit.slice(1));
console.log(garden.reverse());
console.log(garden.sort());
let somenum = [1,4,3,5,3,2,6,8];
console.log(somenum.sort(function(a,b) {return a-b})); // accending
console.log(somenum.sort(function(a,b) {return b-a})); // deccending

let empty = [];

for(let n = 0; n < 10; n++) {
    empty.push(n);
}
console.log(empty);

// Objects
let student = {first: 'Jet', last:'Ryan'};
console.log(student.first);
console.log(student['first']);

let studio = {
    Mic: 'Rode',
    Speakers: 'Yamaha',
    studioInfo: function() {
        return this.Mic + " " + this.Speakers;
    }
};

console.log(studio['Mic'])
console.log(studio.studioInfo());
age = 19;
var status;
if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
}
else {
    status = 'yikes';
}

console.log(status);
let answ = 1;
switch (answ) {
    case 0:
        console.log("its zero");
        break;
    case 1:
        console.log("its one");
        break;
    case 2:
       console.log("its two");
       break;
    default:
        console.log("not good");
        break;
}


