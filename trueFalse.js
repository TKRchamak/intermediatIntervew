// falsy
// 0
// ""
// undefine
// null
// Nan
// upper case are false default.

// '0', " ", [] this are true.

const numb = 0; //number without 0, every number is true include (-)number.
if(numb){
    console.log('this is true');
}
else{
    console.log('this is false');
}

const numb2 =  " "; // every string is true include " ", without ""(empty string).
if(numb2){
    console.log('this is true');
}
else{
    console.log('this is false');
}
// variable a kono jinis define kora nathale seta auto false hoye jabe.