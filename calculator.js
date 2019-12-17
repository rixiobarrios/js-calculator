let calculator = {
    add: function(x, y) {
        return x + y;
    },
    substract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    },
    expo: function(x, y) {
        return x ** y;
    },
    square: function(x) {
        return x ** 2;
    }
};

console.log(calculator.add(2, 2));
console.log(calculator.substract(2, 2));
console.log(calculator.multiply(2, 2));
console.log(calculator.divide(2, 2));
console.log(calculator.expo(2, 2));
console.log(calculator.square(2));
