// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (toppings.length === 0) {
        console.log("You ordered a plain sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following toppings:");
        toppings.forEach(function (topping) { return console.log("- " + topping); });
    }
    console.log(); // Empty line for better readability
}
// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Bacon");
makeSandwich("Peanut Butter", "Jelly");
