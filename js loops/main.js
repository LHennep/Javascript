console.log("main.js is running...");

// opdr 1
let counter = 0;
while (counter < 10) {
    console.log("counter is ", counter);

    // counter = counter + 1;
    //  counter += 1;
    counter++;
}
console.log("einde loop");

// opdr 2
counter = 2;
while (counter < 21) {
    console.log("counter is ", counter);

    counter++;
}
console.log("einde loop");

// opdr 3
counter = 10;
while (counter > -1) {
    console.log("counter is ", counter);

    counter--;
}
console.log("einde loop");

// opdr 4
counter = 40;
while (counter > 3) {
    console.log("counter is ", counter);

    counter--;
}
console.log("einde loop");

// opdr 5
counter = 8;
while (counter > 0) {
    console.log("Ik ben een student van ROC Mondriaan", counter);

    counter--
}
console.log("einde loop");

// opdr 6
counter = 0;
while (counter < 9) {
    console.log("infinite loop", counter);

    counter++
    
 
}
console.log("einde loop");

// opdr 7 
counter = 0;
while (counter < -2) {
    console.log("counter is", counter);

    counter++

    if (counter >= 10){
        break
    }
}

console.log("einde loop");

// opdr 8
counter = 0;
while (counter < 21) {
    console.log("Loop", counter);

    counter++

    if (counter >= 11){
        break
    }
}

console.log("einde loop");

// opdr 9
counter = 0;
while (counter < 21) {
    console.log("Dit is zin 1. Dit is zin 2", counter);

    counter++

    if (counter >= 11){
        console.log("dit is zin 2", counter);
        continue
        break

    }
    
}

console.log("einde loop");




