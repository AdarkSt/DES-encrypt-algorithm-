export const modifyerForConvertationToDecimal = (array) => {
    while (array[0] == 0) {
        array.shift();
    }
    return array;
}