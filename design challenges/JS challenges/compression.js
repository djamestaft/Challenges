/**
 * Program that writes compression and decompression functions for a basic "encryption" algorithm.
 */

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

    return compressed;
}

console.log(stringCompression("aabbccdd"));