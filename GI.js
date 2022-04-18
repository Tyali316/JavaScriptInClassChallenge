  //Very Easy//

var num1 = 6;
var num2 = 2;
let difference = 6 - 2;
console.log(`The difference between ${num1} and ${num2} is ${difference}`)

    //Easy//

let brother = "Joseph";
let mother = "Ortressa";

if (mother.length > brother.length){

  let diff= mother.length - brother.length;
   console.log(`The name ${brother} is shorter than ${mother} by ${diff} characters`);
} 
 else 
{
    let diff = brother.length - mother.length
    console.log(`${brother} is longer than ${mother} by ${diff} characters `);
}

    //Medium//

let userInput = prompt("Are you whispering, screaming or speaking normal?");

if (userInput === userInput.toLowerCase()){
  alert("You're whispering");
}
 
//else if (userInput === userInput.toUpperCase()){
//    alert("You're screaming");
//}

//else {
//    alert("You're speaking normal");
//}



     // Hard//

 //addition// 
//let num1 =6;
//let num2 =3;
//console.log(num1+num2);

// or I can do my subtraction function this way, using x,y&z instead of num//
//let x= 7;
//let y= 10;
//let z= x-y;
//console.log(z);

//multiplication//

//let a= 10;
//let b= 12;
//let c= a * b;
//console.log(c);

//Divison//
//let num3= 2;
//et num4= 20;
//console.log(num3/num4);


//VERY HARD//

let x = prompt("Try out my calculator! Please enter a number");
let y = prompt("Enter a second number");
let op = prompt("Choose an operator (+,-,*,/)");

x,y = parseFloat(x,y)
//adds two numbers together//
function add(n0,n1) {
    return n0 + n1
}

//subtracts two numbers//
function subtract(n0,n1) {
    return n0 - n1
}

//multiplies two numbers together//
function multiply(n0,n1) {
    return n0 * n1
}

//divides two numbers together//
function divide(n0,n1) {
    return n0 / n1
}

//makes the results based on the operator by adding if & else//

if (op == "+") {
    alert(`${x} + ${y} = ${add(x,y)}`)
}
else if ( op == "-") {
  alert(`${x} - ${y} = ${subtract(x,y)}`)
}
else if (op == "*") {
    alert(`${x} * ${y} = ${multiply(x,y)}`)
}
else if (op == "/") {
    alert(`${x} / ${y} = ${divide(x,y)}`)
}





