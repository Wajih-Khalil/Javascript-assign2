// Answer 1-->
//document.write(`<h1><b>Q01-Addition</b></h1>`);
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var res = num1 + num2;
// alert("The Sum of two number is: " + res);

// Answer 2-->
//document.write(`<h1><b>Q02-Simple BODMAS</b></h1>`);
// SUBTRACTION
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var res = num1 - num2;
// alert("The Subtraction of two number is: " + res);

//  MULTIPLICATION
// var res2 = num1 * num2;
// alert("The Multiplication of two number is: " + res2);

//  DIVISION
// var res3 = num1 / num2;
// alert("The Division of two number is: " + res3);

//  MODULUS
// var res4 = num1 % num2;
// alert("The Mod of two number is: " + res4);

// Answer 3-->
//document.write(`<h1><b>Q03-Mathematic Expressions</b></h1>`);
//var input;
//document.write("Value after variable declaration is:" + input);
//input = +prompt("Enter the value: ");
//document.write("<br>Initial value of variable is: " + input);
//input++;
//document.write("<br>Value after increment is: " + input);
//input = input + 7;
//document.write("<br>Value after addition is: " + input);
//--input;
//document.write("<br>Value after decrement is: " + input);
//input = input % 3;
//document.write("<br>The Remainder is: " + input);

//  Answer 4-->
//document.write(`<h1><b>Q04-Ticket Counter</b></h1>`);
//alert("Price of each ticket is: PKR 600");
//var ticketCount = +prompt("Enter Number of Tickets you want: ");
//var res = 600 * ticketCount;
//alert("Total Price of tickets is: PKR " + res);

//  ANSWER 5-->
//document.write(`<h1><b>Q05-Table</b></h1>`);
//var num = +prompt("Enter number you want the table of: ");
//document.write(`<br> <h1> Table of  ${num} </h1> `);
// for (i = 1; i <= 12; i++) {
//   document.write(`<br> ${num} x ${i} = ` + num * i);
//}

 // ANSWER 6-->
 //document.write(`<h1><b>Q06-Temperature Conversion</b></h1>`);
 // CELCIUS TO FAHRENHEIT

 //var cTf = +prompt("Enter Temperature in Celcius: ");
 //var fRes = (cTf * 9 / 5) + 32;
 //alert("The Temperature in Fahrenheit is: " + fRes);
 //
 //// FAHRENHEIT TO CELCIUS
 //
 //var fTc = +prompt("Enter Temperature in Fahrenheit: ");
 //var cRes = ((fTc - 32) * 5) / 9;
 //alert("The Temperature in Celcius is: " + cRes);

//  ANSWER 7-->
//document.write(`<h1><b>Q07-Shopping Cart</b></h1>`);
// const shipping = 100;
// var item1 = 650,
//   item2 = 300,
//   res1,
//   res2,
//   total;
// var quantity1 = +prompt("Enter the Quantity of Item 1: ");
// var quantity2 = +prompt("Enter the Quantity of Item 2: ");
// res1 = item1 * quantity1;
// res2 = item2 * quantity2;
// total = res1 + res2 + shipping;
//document.write("The Price of Item 1 is: PKR" + item1);
//document.write("<br>Quantity of Item 1 is: " + quantity1);
//document.write("<br>The Price of Item 2 is: PKR" + item2);
//document.write("<br>Quantity of Item 2 is: " + quantity2);
//document.write("<br>Total Price of item1: PKR" + res1);
//document.write("<br>Total Price of item2: PKR" + res2);
//document.write("<br>Shipping Charges: " + shipping);
//document.write("<br>Total Cost of your Order is: PKR" + total);

//  ANSWER 8-->
//document.write(`<h1><b>Q08-Marks Sheet</b></h1>`);
 //var totalMarks = +prompt("Enter the total marks: ");
 //var obtainMarks = +prompt("Enter the marks obtained: ");
 //var percentage;
 //percentage = (obtainMarks / totalMarks) * 100;
 //document.write(`Total Marks: ${totalMarks}`);
 //document.write(`<br>Obtain Marks: ${obtainMarks}`);
 //document.write(`<br>Percentage is: ${percentage}%`);

//  ANSWER 9-->
//document.write(`<h1><b>Q09-Currency Converter</b></h1>`);
// var dollar = +prompt("Enter the amount in Dollar: ");
// var riyal = +prompt("Enter the amount in Saudi Riyal: ");
// var dollarRes, riyalRes,total;
// dollarRes = dollar * 302.5;
//riyalRes = riyal * 80.65;
//total = dollarRes + riyalRes;
//document.write(`<h4>Conversion of $${dollar} in PKR is:</h4> PKR ${dollarRes}`);
//document.write(`<br><h4>Conversion of  SAR ${riyal} in PKR is:</h4> PKR ${riyalRes}`);
//document.write(`<br><h4>Total converted money:</h4> PKR ${total}`);

//  ANSWER 10-->
//document.write(`<h1><b>Q10-Arithmetic Calculation</b></h1>`);
//var num = 10, add = 5, multiply = 10, divide = 2, res;
//document.write(`Initialized number is: ${num} `);
//document.write(`<br>Adding in: ${add} `);
//document.write(`<br>Multiplying by: ${multiply} `);
//document.write(`<br>Dividing by: ${divide} `);
//res = ((num + add) * multiply) / divide;
//document.write(`<br>The result is: ${res}`);

//  ANSWER 11-->
//document.write(`<h1><b>Q11-Age Calculator</b></h1>`);
// var currentYear = 2023,
//   age;
// var birthYear = +prompt("Enter Your Birth Year");
// age = currentYear - birthYear;
//alert(`Your age is: ${age}`);
//document.write(`Current Year: ${currentYear}`);
//document.write(`<br>Birth Year: ${birthYear}`);
//document.write(`<br>Your Age: ${age}`);

//  ANSWER 12-->
//document.write(`<h1><b>Q12-The Geometrizer</b></h1>`);
//var radius = +prompt("Enter radius: "), circumference, area;
//circumference = 2 * 3.142 * radius;
//area = 3.142 * radius * radius;
//document.write(`<br>The Radius is: ${radius}`);
//document.write(`<br>The Circumference is: ${circumference}`);
//document.write(`<br>The Area is: ${area}`);

// ANSWER 13-->
//document.write(`<h1><b>Q13-The Lifetime Supply Calculator</b></h1>`);
// var favSnack = prompt("Enter Your Favourite Snack: "),
//   curAge = +prompt("Enter Your Current Age: "),
//   estAge = +prompt("Enter Estimated Maximum Age"),
//   snacks_per_day = +prompt("Amount of Snacks per day: "),
//   res = (estAge - curAge) * snacks_per_day;
//document.write(`<b>Favourite Snack:</b> ${favSnack}`);
//document.write(`<br><b>Current Age:</b> ${curAge}`);
//document.write(`<br><b>Estimated Maximum Age:</b> ${estAge}`);
//document.write(`<br><b>Amount of Snacks per day:</b> ${snacks_per_day}`);
//document.write(`<br><b>You will need</b> ${res} ${favSnack} <b>to last you until the ripe old age of</b> ${estAge}`);
