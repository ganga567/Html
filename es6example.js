const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum);

const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);
