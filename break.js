const numbers = [2, 4, -6, 67, -43, 46, 32, -64, 89, 63, 78, 62];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 90) {
        break;
    }
    console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    console.log('contu', numbers[i]);
}