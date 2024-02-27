// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Allama iqbal", "Altaf ", "Nawaz"];
// Print invitation messages to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nSincerely,\n[Your Name]"));
});
// Name of the guest who can't make it
var guestWhoCantMakeIt = "Allama ibqal";
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the name of the guest who can't make it with the name of the new person you are inviting
var indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = "Afridi";
}
console.log("\nAttention: A bigger dinner table has been found!\n");
// Add new guests
guestList.unshift("Imran"); // Add a new guest to the beginning of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, "hafiz sahab"); // Add a new guest to the middle of the array
guestList.push("fazlu"); // Append a new guest to the end of the array
// Print a new set of invitation messages
console.log("New Set of Invitation Messages:\n");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nSincerely,\n[Your Name]"));
});
