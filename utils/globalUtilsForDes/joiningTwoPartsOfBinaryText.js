export const joiningTwoPartsOfBinaryText = (partR, partL) => {
    const binaryText = [];
    for (let item of partL) {
        binaryText.push(item);
    }
    for (let item of partR) {
        binaryText.push(item);
    }
    return binaryText;
}