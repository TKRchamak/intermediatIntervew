const student =[
    {age: 18, name: 'puskar'},
    {age: 38, name: 'tonmoy'},
    {age: 24, name: 'chamak'}
];
const nameArray = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    console.log(element.name);
    nameArray.push(element.name);
}
console.log(nameArray);


const studentsNam = student.map(x => x.name);
console.log(studentsNam);
const studentsRoll = student.map(x => x.age);
console.log(studentsRoll);
const studentsFilter = student.filter(x => x.age > 20);
console.log(studentsFilter);
const studentsFind = student.find(x => x.age > 20);
console.log(studentsFind);

