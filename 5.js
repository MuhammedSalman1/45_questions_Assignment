/*
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
 Print the name once, so thewhitespace around the name is displayed. Then print the name after
  striping the white spaces.

*/
// Store the person's name with whitespace characters
var personNameWithWhitespace = "\t\n   John Doe   \t\n";
// Print the name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);
// Strip the whitespace around the name
var strippedName = personNameWithWhitespace.trim();
// Print the stripped name
console.log("Stripped Name:", strippedName);
