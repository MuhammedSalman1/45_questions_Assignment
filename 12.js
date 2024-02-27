// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements
//  about these items, such as “I would like to own a Honda motorcycle.”
var transportationmode = ["car", "bus", "cycle", "train"];
transportationmode.forEach(function (transportationmode) {
    console.log("i Would like to own a ".concat(transportationmode));
});
