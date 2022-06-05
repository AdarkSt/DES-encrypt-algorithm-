export const convertToDecimal = (array) => {
    let num = 0;
    for (let index = 0; index < array.length; ++index) {
        num += array[index] * Math.pow(2, index);
    }
    return num;
}