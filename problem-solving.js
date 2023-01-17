// Problem-1
function addition(num1,num2){
    return num1+num2;
}
// console.log(addition(2,3));

// Problem-2
function convert(number){
    return number * 60;
}
// console.log(convert(5));

// problem-3

function addition(num){
    return num + 1
}
// console.log(addition(-3));

// Problem-4
function triArea(base,height){
    return (base * height) / 2;
}
// console.log(triArea(10,10));

// Problem-5

function getFirstValue(numbers){
    return numbers[0];
}

const numbers = [10,2,3]
// console.log(getFirstValue(numbers));

// Problem-6
function calcAge(age){
   return age * 365;
}
// console.log(calcAge(0));


// Problem-7
function circuitPower(voltage,current){
    return voltage * current;
}

// console.log(circuitPower(230,10));

// problem-8
function nextEdge(triangle1,triangle2){
    return (triangle1 + triangle2) - 1;
}
// console.log(nextEdge(8,10));

// Problem-9

function reminder(number1,number2){
    return number1 % number2;
}
// console.log(reminder(-9,45));

// Problem-10
function giveMeSomething(a){
    return 'something' + ' ' + a
}
// console.log(giveMeSomething('is better than nothing'));

// problem-11
function squared(num){
    return num*num;
}
// console.log(squared(5));

// Problem-12
function lessThanOrEqualToZero(num){
   return num <= 0
}
// console.log(lessThanOrEqualToZero(-2));

// problem-13
function sumPolygon(n){
    return (n - 2) * 180;
}
// console.log(sumPolygon(4))

// problem-14
function nameString(name){
    const coder = "coder";
    return name + coder;
}
const names = "Mubashir";
const result = nameString(names);
// console.log(result);

// Problem-15
function lessThan100(num1,num2){
    const sum = num1 + num2;
    if(sum <= 100){
        console.log(true)
    }
    else{
        console.log(false)
    }
    return sum
}
console.log(lessThan100(220,15))