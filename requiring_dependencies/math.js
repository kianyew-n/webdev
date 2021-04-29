

// Method 1 to export functions
add = (x, y) => (x + y)
square = (x) => x**2
module.exports.add = add
module.exports.square = square

// Method 2 to export functions
const math = {
    add: (x, y) => x + y,
    PI: 3.14,
    square: x => x**2
}
module.exports = math

// Method 3 to export functions (basically Method 1 but without temporary variable)
module.exports.add = (x,y) => (x+y)
module.exports.square = x => x ** 2


// Method 4, independently add a function + add on object of functions
// The subtract get appending to the "exports" dictionary
// returns: { add: [Function], PI: 3.14, square: [Function], subtract: [Function] }
module.exports.subtract = (x,y) => x-y
module.exports = math