const prompt = require("prompt-sync")();
let number1 = prompt("Give me an Integer number: ");
let number2 = prompt("Give me another Integer number: ");

const largerOfTwo = (number1, number2) => {
    if(number1.length > number2.length){
        console.log(`The ${number1} is larger than ${number2}`);
    }else{
        console.log(`The ${number2} is larger than ${number1}`);
    }
};
largerOfTwo(number1, number2);