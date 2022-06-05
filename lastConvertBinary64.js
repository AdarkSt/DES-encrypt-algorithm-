export const lastConvertBinary64 = (encodedFullBinaryText, tableForLastConvertation) => {
    const convertedLastBinaryText = [];
    for (let index of tableForLastConvertation) {
        convertedLastBinaryText.push(encodedFullBinaryText[index - 1])
    }
    return convertedLastBinaryText;
}