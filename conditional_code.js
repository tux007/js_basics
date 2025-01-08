let myCondition = true;
myCondition = !myCondition; // NOT Operator

myCondition = false || false || true; // OR Operator
myCondition = false && false && true; // AND Operator

console.log(myCondition);

// Examples
console.log(true && false);

console.log(true || false);

console.log(false && true);

console.log(true && (false || true));

console.log((true && false) || true);

console.log(!(true && false));

console.log(!(false || true));

console.log(!(true && (false || true)));

console.log((true && !(false || true)) || (false && (true || false)));

console.log((true || !(false && true)) && (!(true || false) || (false && true)));