function clock(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = clock();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = clock();
console.log(clock2());
console.log(clock2());
console.log(clock1());

// function er vitore jodi r akta function k return kori tahole akta close environment toiri hoy r parent funtion a akta external akta variable rekhe day.