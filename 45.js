// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option, index) {
        car["option".concat(index + 1)] = option;
    });
    return car;
}
// Example usage
var myCar = createCar('Toyota', 'Camry', 'red', { sunroof: true }, ['GPS', 'Bluetooth']);
console.log(myCar);
