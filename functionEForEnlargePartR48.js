export const functionEForEnlargePartR48 = (partR, tableForEFunction) => {
    const enlargedPartR = [];
    for (let index of tableForEFunction) {
        enlargedPartR.push(partR[index - 1]);
    }
    return enlargedPartR
}