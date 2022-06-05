export const createCompactBinaryKeyFromEnlarged48 = (compactBinaryKey56, keyTable2) => {
    const compactBinaryKey48 = [];
    for (let index of keyTable2) {
        compactBinaryKey48.push(compactBinaryKey56[index - 1]);
    }
    return compactBinaryKey48;
}