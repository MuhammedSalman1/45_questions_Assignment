// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicianss by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Function to modify magician names by adding "the Great"
function make_great(magicianss) {
    for (var i = 0; i < magicianss.length; i++) {
        magicianss[i] = "the Great ".concat(magicianss[i]);
    }
}
// Function to display magician names
function show_magicians(magicianss) {
    console.log("Magicians:");
    magicianss.forEach(function (magician) { return console.log(magician); });
}
// Array of magician names
var magicianss = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Modify the list to add "the Great" to each magician's name
make_great(magicianss);
// Display modified list of magicianss
show_magicians(magicianss);
