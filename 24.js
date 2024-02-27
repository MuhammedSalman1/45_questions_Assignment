// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var name1 = 'Salman';
var name2 = 'Adnan';
console.log("Is name1 equal to 'Salman'? I predict True.");
console.log(name1 == 'Salman');
console.log("Is name2 not equal to 'Adnan'? I predict True.");
console.log(name2 != 'Adnan');
// Tests using the lower case function
var str1 = 'HELLO';
var str2 = 'hello';
console.log("Is str1 equal to str2 in lowercase? I predict True.");
console.log(str1.toLowerCase() == str2.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 5;
var num2 = 10;
console.log("Is num1 equal to 5? I predict True.");
console.log(num1 == 5);
console.log("Is num2 greater than 5? I predict True.");
console.log(num2 > 5);
console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = false;
console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm);
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
