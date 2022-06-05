export const converteInFeystel32 = (arrayOfSBoxConverted32, tableForFeystelConcertation) => {
    const converted = [];
    for (let index of tableForFeystelConcertation) {
        converted.push(arrayOfSBoxConverted32[index - 1]);
    }
    return converted;
}