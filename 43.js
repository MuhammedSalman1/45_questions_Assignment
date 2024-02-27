// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to modify magician names by adding "the Great"
function make_great(magicians1) {
    var great_magicians = [];
    for (var i = 0; i < magicians1.length; i++) {
        great_magicians.push("the Great ".concat(magicians1[i]));
    }
    return great_magicians;
}
// Function to display magician names
function show_magicians(magicians1) {
    console.log("Magicians:");
    magicians1.forEach(function (magician) { return console.log(magician); });
}
// Array of magician names
var magicians1 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great with a copy of the array and store the modified array
var great_magicians = make_great(__spreadArray([], magicians1, true));
// Display original list of magicians1
console.log("Original Magicians:");
show_magicians(magicians1);
// Display modified list of magicians1
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
