//console.log(process.argv);

var operation = process.argv[2];
var value1 = parseInt(process.argv[3]);
var value2 = parseInt(process.argv[4]);

var result = 0;

switch (operation){
    case "sum":
        result = value1 + value2;
    break;
    case "subtraction":
        result = value1 - value2;
    break;
    case "division":
        result = value1 / value2;
    break;
    case "multiplication":
        result = value1 * value2;
    break;
    case "rest":
        result = value1 % value2;
    break;
    case "percentage":
        result = value1 * value2 / 100;
    break;
}

console.log(result);

