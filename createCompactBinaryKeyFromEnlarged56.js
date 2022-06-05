export const createCompactBinaryKeyFromEnlarged56 = (enlargedBinaryOfFirstKey64, keyTable) => {
    const compactBinaryKey56 = [];
    for (let index of keyTable) {
        compactBinaryKey56.push(enlargedBinaryOfFirstKey64[index - 1]);
    }
    return compactBinaryKey56;
}