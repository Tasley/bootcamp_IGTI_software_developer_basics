//console.log(process.argv);

var operation = process.argv[2];
var value1 = parseInt(process.argv[3]);
var value2 = parseInt(process.argv[4]);

var result = 0;

if (operation === "sum"){
    result = value1 + value2;
    console.log(result);
} else if (operation === "subtraction"){
    result = value1 - value2;
    console.log(result);
} else if (operation === "division"){
    result = value1 / value2;
    console.log(result);
} else if (operation === "multiplication"){
    result = value1 * value2;
    console.log(result);
} else if (operation === "rest"){
    result = value1 % value2;
    console.log(result);
} else if (operation === "percentage"){
    result = value1 * value2 / 100;
    console.log(result);
}
else {
    console.log('\nPlease check the parameters. Operations must be typed in English.\n')
}

