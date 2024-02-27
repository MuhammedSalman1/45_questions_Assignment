//  Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a
//  variable called famous_person. Then compose your message and store it in a new variable 
//  called message. Print your message.
// Store the famous person's name in a variable
var famous_person = "Albert Einstein";
// Define the quote
var quote = "A person who never made a mistake never tried anything new.";
// Compose the message
var message = "Quote: \"".concat(quote, "\"\nAuthor: ").concat(famous_person);
// Print the message
console.log(message);
