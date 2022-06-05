export const binaryTextCreator = (ObjectsOfBinaryText) => {
    const binaryText = [];
    for (let object of ObjectsOfBinaryText) {
        for (let sim of object.byte) {
            binaryText.push(+sim);
        }
    }
    return binaryText;
}