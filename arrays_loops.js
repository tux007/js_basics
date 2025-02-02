let myList = [12, "Bananaaaa", true ];

let fruits = ["Banana", "Orange", "Apple", "Mango"];

//let singleTestVar = fruits.pop();

function initArray() {
    // let contentRef = document.getElementById("my_content");
    // contentRef.innerHTML = "";
    // for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
        
    //     contentRef.innerHTML += `<p>+ ${fruits[indexFruits]}</p>`;        
        
    // }

    // let refList = document.getElementsByClassName('red_box');

    // for (let index = 0; index < refList.length; index++) {
    //     const singleRef = refList[index];
    //     singleRef.innerText = index;
        
    // }
    let i = 0;

    fruits.forEach(element => {
        console.log(element);
        
    });


    // while (i < 5) {        
    //     console.log("while " + i);
    //     i++;
    // }

    // for (let index = 0; index < 5; index++) {
    //     console.log("for " + index);
        
    // }

}

function sumArray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index] == "error") {
            console.error("Jesses da war ein Fehler");            
            continue;            
        }
        sum += arr[index];
        
        
    }
    return sum;
}

console.log(sumArray([3, 7, 1, "error", 4, 5])); 
console.log(sumArray([1, 2, 3, 4, 5]));

function printNumbers(number) {
    for (let index = 1; index <= number; index++) {
        console.log(index);
    }
}
printNumbers(5);
printNumbers(3);

function printNumbers2(number) {
    let output = '';
    for (let index = 1; index <= number; index++) {
        output += index + ', ';
    }
    console.log(output.slice(0, -2)); // Entfernt das letzte Komma und Leerzeichen
}

printNumbers2(5);
printNumbers2(3);

function printNumbersBackwards(number) {
    for (let i = number; i >= 1; i--) {
      console.log(i);
    }
  }
  
  printNumbersBackwards(5);