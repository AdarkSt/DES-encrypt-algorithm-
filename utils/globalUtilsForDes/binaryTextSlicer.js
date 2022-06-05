export const binaryTextSlicer = (binaryText) => {
    const partsOfBinaryText = {};
    partsOfBinaryText.partL = binaryText.slice(0, 32);
    partsOfBinaryText.partR = binaryText.slice(32, 64);
    return partsOfBinaryText;
}