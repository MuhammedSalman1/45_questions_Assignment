//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// List of people to invite to dinner
var guestList = ["Altaf", "nawaz", "khalid", "imran", "marwat", "murad"];
// Print invitation messages to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nSincerely,\nMuhammed Salman"));
});
// Name of the guest who can't make it
var guestWhoCantMakeIt = "Altaf";
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the name of the guest who can't make it with the name of the new person you are inviting
var indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = "Mustafa";
}
// Inform that a bigger dinner table has been found
console.log("\nAttention: A bigger dinner table has been found!\n");
// Add new guests
guestList.unshift("zartaj"); // Add a new guest to the beginning of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, "maryam"); // Add a new guest to the middle of the array
guestList.push("Mahrang"); // Append a new guest to the end of the array
// Inform that only two people can be invited for dinner
console.log("Attention: Due to a delay, we can only invite two people for dinner.\n");
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages to the two remaining guests
console.log("\nInvitation Messages for Remaining Guests:\n");
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou're still invited to dinner. See you there!\nSincerely,\nMuhammed Salman"));
});
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the updated list to confirm it's empty
console.log("\nUpdated Guest List:", guestList);
// Print the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(guestList.length));
