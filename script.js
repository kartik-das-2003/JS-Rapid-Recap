/*
//JS -> Basic --> onclick id function call
document.getElementById("btn").onclick = function(){
    alert("I am a dialog box");
}

//JS --> Onclick function attached to button
function myFun_textChange(){

    //inner html write any thing in html
    document.getElementById("demo").innerHTML = "Hi I Am Kartik";
}

//JS --> basic operators
function arithmatic(){
    const x = parseFloat(document.getElementById("x_val").value);
    const y = parseFloat(document.getElementById("y_val").value);
    document.getElementById("add").innerHTML = x + y;
    document.getElementById("sub").innerHTML = x - y;
    document.getElementById("mul").innerHTML = x * y;
    document.getElementById("div").innerHTML = x / y;
    

    //by using js style can also change 
    document.getElementById("result").style.display = "block";

    console.log();
    
}

function myFun(){

    //idea of how let & const work
    let p1 = document.getElementById("name").value;
    const q1 = document.getElementById("name").value;

    p1 = document.getElementById("name_change").value;
    //q1 = document.getElementById("name_change"); -->this can't possible

    document.getElementById("let_case").innerHTML = p1;
    document.getElementById("const_case").innerHTML = q1;
    
    document.getElementById("res").style.display = "block";
}

//javascript events
//Events are basically taking actions 

const btn_new = document.getElementById("study");
btn_new.onclick = function(){
    alert("HI!");
}

//Popular Event --> .addEventListenter(<eventType>,<listenerFunction>);

const button_name = document.getElementById("study_4u");

//eventType -> click
button_name.addEventListener("click",function(){
    alert("2+2 = :(" );
})

//eventType -> change
const new_var = document.getElementById("onion");
new_var.addEventListener("change",function(){
    const val = document.getElementById("onion").value;
    document.getElementById("area_select").innerHTML = val;
})

//eventType -> mouseover
document.getElementById("xemo").addEventListener("mouseover",function(){
    document.getElementById("xemo").innerHTML = "Hi I am Kartik";
})

//eventType -> keypress
document.getElementById("my_area").addEventListener("keypress",function(){
    document.getElementById("dem").innerHTML = document.getElementById("my_area").value;
})

*/

//Datatypes
//For this we only do console application
/*

//concatenation-->
const Name = "Kartik";
const Title = "Das";

const fullName = Name + " " +Title;
console.log(fullName);
*/

/*
const x = 4;
const y = 5.5;

const sum = x + y;
console.log(sum);
console.log(typeof(sum))


1. Number -->like: integer,float,double etc..
2. String
3. Boolean
4. Undefined Datatype(-->let)
5. null Datatype(=null)
6. object datatype
*/

/*

//Boolean Types
const x = 9;
const y = "9";

console.log(x==y); //it can't check the data type status
console.log(x===y);// it also checks the datatypes status
*/


//Java Script Objects
/*
const student = {
    id : 1,  //number
    grade : 'A',  //string
    subjects : 'Science', //string
    school : 'GCECT',  //string
    isActive : true  //boolean
}

console.log(student);
console.log(student.id);
console.log(student.school);
*/

//JS Array
//Array is a collection of values
/*
const myArr = ["apple","banana","cucumber","biriyani","fried-rice","pulao",70,80,5,true];

console.log(myArr);
console.log(myArr[5]);
console.log(typeof(myArr));  //it prints object
//that means that array is an object in js

*/

//Undefined variable-->let
/*
let x;  //undefined but not assigned as null
//const x; //not possible
x = 10;
console.log(x);
*/

//JS special 'null' datatypes
/*
const fruit = null; //but suppose [[ fruit = "" ]] is not a null datatype
let menu = null;
console.log(fruit);
console.log(menu);
console.log(typeof(fruit));  //it returns object datatypes
console.log(typeof(menu)); //it returns object datatypes
*/

//Overall JS Primitive Datatypes are -->
/*
** String
** Number
** Boolean
** Undefined
** null
*/

//Overall JS NonPrimitive/Complex Datatypes are -->
/*
** Object
** Function
*/

//thus js is Dynamic programming language


//Operators in JS....
//try it to console...
//interesting operators are like (identity/equivalance operator,bitwise)
//arithmetic,assignment,comparison,logical,conditional,bitwise,turnary

//arithmetic --> + , - , * , / , % , **(exponential) , ++(incremental) , --(decremental) 
//assignment --> = , += , -= , *= , /= , %= , **= 
//comparison --> ==(equal) , ===(identity) , != , !== , > , < , >= , <=
//logical --> && , || , !(not expression)
//bitwise --> & , | , ^(xor) , ~(not)
//ternary --> exp ? true_exp : false_exp
//shift --> >>(right shift), <<(left_shift)


/*
const backPack = {
    slots : 5,
    isLaptop : true,
    securitySlot : true,
    slotType : {
        oneWay : 2,
        twoWay : 3,
    },
    bagColor : {
        upperPart : "Blue",
        middlePart : "Yellow",
        lowerPart : "Red",
    },
    brand : "SkyyBackpacks",
    bottlePart : ["Metal","Plastic"],
    keyChain : false,
}

console.log(backPack);
console.log("This Backpack contains Laptops?==>"+backPack.isLaptop);
console.log("This Backpack have Bottles?==>"+backPack.bottlePart);
console.log("This Backpack contains which colors?==>"+backPack.bagColor);
console.log("This Backpack contains which colors upperpart?==>"+backPack.bagColor.upperPart);
console.log("This Backpack brand name?==>"+backPack.brand);
console.log("Does it have any security slot?=>"+backPack.securitySlot);
*/




//JavaScript Strings
/*
const myFamily = "Hello there I love my Family";

//Finding in string
//using indexOf()
console.log(myFamily.indexOf('Hello'));
console.log(myFamily.indexOf('Family'));
console.log(myFamily.indexOf('love'));
console.log(myFamily.indexOf('pokemon')); //if there is no occurance
console.log(myFamily.indexOf('Hellooo'));//same 

//using search()
console.log(myFamily.search('Hello'));
console.log(myFamily.search('Poki')); //no occurance
*/
//string slicing
//substring(<start_index>,<end_index>) ==. including starting index but till before ending index(excluding end index)
//slice(<start_index>,<end_index>) ==. including starting index but till before ending index(excluding end index)
//substring works only positive index but slice can works in +ve & -ve indexes also
/*
const statements = "Am you save"; //lower reference the numbers
//const statemen = "01234567890";
console.log(statements.slice(1,5));
*/

/*
const mango = "mangosaid our\0that heis very funny\0";

console.log(mango[9]); // \0 is actually blankspace
console.log(mango.length);
for(let i = 0;i<mango.length;i++){
    console.log(mango[i]);
}*/

//More cases
//str.repace(<old_phrase_part>,<updated_phrase_part>)
//str.trim() //trims the line

//str.toUpperCase()
//str.toLowerCase()

//str.concat(<concated-part>,....)


//More in numbers
/*
const nums = 2;
const nums2 = 5.7;

console.log(nums+nums2);
*/
/*
const num = 151e6; //it means 151 * 10^6
const lom = 151e-7 //it means 151 * 10^-7
*/
/*
const div = "15/2"
const div1 = "15" / "2" //as operator is arithmetic thus it also do the job -->7.5
const mul = "15" * "2" //2 times 15 --> 30
const mul1 = 15 * "2" //15 times 2 --> 30
//but
const mul2 = "abc" * "2"; //returns NaN --> special datatype also(NaN --> Not a Number)
 
const add1 = "abc" + "29"; //no NaN simple concat
const add2 = "17" + "25"; //concat
*/
/*
//NaN ---> special number
//suppose
const x_div = "10" / 5 ; // 2
const y_div = 10 / "5" ; // 2
const z_div = 10 / "lol" ; //NaN

//NaN datatype is still a Number
console.log("Datatype Of NaN:"+typeof(NaN));

//isNaN(<expression/number>) --> usedto validate a number or not
*/




//JavaScript Numbers
/*
const num1 = Number.isFinite(22/7); 
const num2 = Number.isInteger(22/7);
const num3 = Number.isFinite(22);
const num4 = Number.isNaN(5/"man");
const num5 = Number.isInteger("hello");
const num6 = Number.isFinite("man"+7);
const num7 = Number.isFinite(9.84);
*/
/*
let num1 = 7.9654;
console.log("Before typecast =>"+ num1 + "==>" + typeof(num1));
console.log("Before typecast =>"+ num1.toPrecision(2) + "==>" + typeof(num1));
console.log("Before typecast =>"+ num1.toFixed(2) + "==>" + typeof(num1));

num1 = parseInt(num1);
console.log("After typecast =>"+ num1 + "==>" +typeof(num1));

num1 = num1.toString();
console.log("After typecast =>"+ num1 + "==>" +typeof(num1));

//toPrecision --> full roundoff
//tofixed --> fixed length round off
//parseInt() , parseFloat() --> possible
//toString();[convert to sring]
*/


//JS array
/*
const fruits = ["Apple","mango","banana","Straberry","Guava","pineapple","jackfruit","berry"];

//like stack operation
fruits.push("Lichi","Avacado");  //add items
fruits.pop() //remove last item  --> it also return the removable item
fruits.shift() //remove first item  --> it also return the removable item
*/








