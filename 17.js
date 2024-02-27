// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// List of people to invite to dinner
var guestList = ["Altaf", "nawaz", "khalid", "imran", "marwat", "murad"];
// Print invitation messages to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nSincerely,\n Muhammed Salman"));
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
    console.log("Dear ".concat(person, ",\nYou're still invited to dinner. See you there!\nSincerely,\n Muhammed Salman"));
});
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the updated list to confirm it's empty
console.log("\nUpdated Guest List:", guestList);
