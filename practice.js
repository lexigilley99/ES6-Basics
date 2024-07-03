const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

const numbers = [...numbers1, ...numbers2];

const square = num => num * num;

const squares = numbers.map(num => square(num));

const isEven = num => num % 2 === 0;

const evenSquares = squares.filter(num => isEven(num));

const [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(`Original Numbers: ${numbers}`);
console.log(`Squares Array: ${squares}`);
console.log(`Even Squares: ${evenSquares}`);
console.log(`First and Second Even Squares: ${firstEvenSquare}, ${secondEvenSquare}`);
