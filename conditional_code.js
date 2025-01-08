let myCondition = true;
myCondition = !myCondition; // NOT Operator

myCondition = false || false || true; // OR Operator
myCondition = false && false && true; // AND Operator

console.log(myCondition);

// Examples
// console.log(true && false);

// console.log(true || false);

// console.log(false && true);

// console.log(true && (false || true));

// console.log((true && false) || true);

// console.log(!(true && false));

// console.log(!(false || true));

// console.log(!(true && (false || true)));

// console.log((true && !(false || true)) || (false && (true || false)));

// console.log((true || !(false && true)) && (!(true || false) || (false && true)));

let myCondition2 = 5 == 5; // tested auf Gleichheit (nicht, ob Typ gleich ist)
myCondition2 = 5 === 5; // tested auf Gleichheit (auch, ob Typ gleich ist) -> true
myCondition2 = 5 === "5"; // false
myCondition2 = 5 > 45; // Grösser abfrage - false
myCondition2 = 45 <= 45; // Kleiner gleich abfrage - true
myCondition2 = 45 != 45; // Ungleich abfrage - false
myCondition2 = 45 !== 45; // Ungleich abfrage (auch, ob Typ ungleich ist) - false
myCondition2 = 45 !== "45"; // Ungleich abfrage (auch, ob Typ ungleich ist) - true

// console.log(myCondition2);

// console.log(5 <= 10);

// console.log(15 == 15);

// console.log(20 > 10);

// console.log((7 <= 7) == (5 < 10));

// console.log((10 > 5) == (3 < 2));

// console.log((12 >= 8) && (8 < 9));

// console.log((3 == 3) || (10 > 20));

// console.log((6 != 6) || (15 <= 20));

// console.log((7 < 5) == !(10 >= 10));

// console.log((4 >= 4) && (8 < 15) && (3 == 3));


let myIfCondition = 45 > 152;
if (myIfCondition) {
    console.log("hellö wörld! IF teil");
} else {
    console.log("hellö wörld! ELSE teil");
}

// Aufgabe 1:
if (5 <= 10) {
    console.log("a");
}

// Aufgabe 2:
if (15 == 15) {
    console.log("b");
}

// Aufgabe 3:
if (20 > 10) {
    console.log("c");
}

// Aufgabe 4:
if (7 <= 7) {
    console.log("a");
} else {
    console.log("b");
}

// Aufgabe 5:
if (10 > 5) {
    console.log("a");
} else if (3 < 2) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 6:
if (12 >= 8 && 8 < 9) {
    console.log("a");
} else {
    console.log("b");
}

// Aufgabe 7:
if (3 == 3) {
    console.log("a");
} else if (10 > 20) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 8:
if (6 != 6) {
    console.log("a");
} else if (15 <= 20) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 9:
if (7 < 5) {
    console.log("a");
} else if (!(10 >= 10)) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 10:
if (4 >= 4 && 8 < 15 && 3 == 3) {
    console.log("a");
} else {
    console.log("b");
}