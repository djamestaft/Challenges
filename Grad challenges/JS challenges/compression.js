/**
 * Program that writes compression and decompression functions for a basic "encryption" algorithm.
 */


//Compression Method
const stringCompression = (str) => {
    let arrayStr = str.split("");
    counter = 1;

    let compressed = arrayStr.reduce((accumulator, currentValue, currentIndex, array) => {
        if (currentValue === array[currentIndex + 1]) {
            counter++;
            return accumulator;
        } else {
            accumulator += (currentValue + counter);
            counter = 1;
            return accumulator;
        }         
    }, "");

    compressed = compressed.replace(/1/g, "");
    return compressed;
}

//Decompression Method
const stringDecompression = (str) => {
    let string = str.split(""),
    DecompString = string.reduce(function (accumulator, currentValue, currentIndex, array){
        let parseValue = parseInt(currentValue);
        if (!isNaN(parseValue)) {
            // Save prev char x times
            accumulator += Array(parseValue + 1).join(array[currentIndex - 1]);
        }
        return accumulator;

    }, "");
    return DecompString;
}

console.log(stringCompression("aaaaaabcd"));
console.log(stringDecompression("a6b2c2d2"));