let exchange_rate = 1500.7383;
console.log("original value");
console.log(exchange_rate);

console.log("turned to a string.");
console.log(exchange_rate.toString());

console.log("Remove decimal points");
console.log(exchange_rate.toFixed());

const interestRate = "6.3";

// Convert to number where decimal point is maintained or use parsetInt that eleminates the decimal.

console.log(parseInt(interestRate));
console.log(Number(interestRate));
