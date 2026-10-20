const numbers = [3, 8, 12, 5, 20, 7];
const overSix = numbers.filter(num => num > 6);
const doubled = numbers.map(num => num * 2);

const total = numbers.reduce((sum, num) => sum + num, 0);

const largest = Math.max(...numbers);

console.log(overSix);
console.log(doubled);
console.log(total);
console.log(largest);