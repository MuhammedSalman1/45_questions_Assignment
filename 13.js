// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. Then use your
//   list to print a message to each person, inviting them to dinner.
var guestlist = ["Allam", "Iqbal", "Shaheen"];
guestlist.forEach(function (guestlist) {
    console.log("Dear ".concat(guestlist, ",\nI would like to invite you to dinner. It would be an honor to have your presence Sincerely,"));
});
