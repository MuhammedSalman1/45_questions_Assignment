// Greetings: Start with the array you used in Exercise 11, but instead of just printing each
// person’s name, print a message to them. The text of each message should be the same, but 
// each message should be personalized with the person’s name.
var frndname = ["Salman", "adnan", "hibban", "muheb"];
var greetingmsg = 'hello,';
frndname.forEach(function (frndname) {
    console.log("".concat(greetingmsg).concat(frndname));
});
