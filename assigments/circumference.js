let radio = 4;
const pi = Math.PI;

const circumference = (radio) => {
    return console.log(2 * pi * radio);
};

const area = (radio) => {
    return console.log(pi * radio * radio);
}; 

area(radio);
circumference(radio);