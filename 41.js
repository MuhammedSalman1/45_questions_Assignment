// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(Magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example usage:
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
show_magicians(magicians);
