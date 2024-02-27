// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var gestlist = ["Allama", "Iqbal", "Pakistani"];
gestlist.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nSincerely,\n[Your Name]"));
});
var guestWhoCantMakeIt = "Allama";
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
var indexOfGuestWhoCantMakeIt = gestlist.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    gestlist[indexOfGuestWhoCantMakeIt] = "Muhammed";
}
console.log("\nSecond Set of Invitation Messages:\n");
gestlist.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nSincerely,\n[Your Name]"));
});
