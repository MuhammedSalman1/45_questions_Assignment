// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var numbers = [1, 2, 3, 4, 5];
// Attempt to access an element at an index that is out of bounds
var indexError = numbers[10]; // This line intentionally produces an array index error
// The following line will not execute due to the error above, but I'll add it to demonstrate the correct way to access elements in an array
console.log("Element at index 10:", indexError);
