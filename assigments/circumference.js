let ratio = 4;
const pi = Math.PI;

const circumference = (ratio) => {
    return console.log(2 * pi * ratio);
};

const area = (ratio) => {
    return console.log(pi * ratio * ratio);
}; 

area(ratio);
circumference(ratio);