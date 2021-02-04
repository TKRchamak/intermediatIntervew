//map use kore array er vitore property gulok ak ak kore ghore nea jay for loop er moto kore
const numbers = [2, 4, 8, 5, 7, 9, 2, 6, 3, 5];
const dnumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const double = element * element;
    dnumbers.push(double);
    
}
console.log(dnumbers);

const see = numbers.map(x => x * x); //const see = numbers.map(elements => elements * elements);
console.log(see);