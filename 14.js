// Changing Guest List: You just heard that one of your guests can’t make the dinner, so
//  you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestlist = ["Allama", "Iqbal", "Pakistani"];
var donotmakedinner = "Allama";
guestlist = guestlist.filter(function (person) { return person != donotmakedinner; });
var newguest = "Muhammed";
guestlist.push(newguest);
guestlist.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nI would like to invite you to dinner. It would be an honor to have your presence Sincerely,"));
});
