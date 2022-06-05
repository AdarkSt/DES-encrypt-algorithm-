import { cyclicShift } from "./utils/encryptKeyGeneratorUtils/ciclicShift.js";
import { createCompactBinaryKeyFromEnlarged48 } from "./utils/encryptKeyGeneratorUtils/createCompactBinaryKeyFromEnlarged48.js";

export const encryptKeyGenerator = (compactBinaryKey56, tableForCyclicShift, keyTable2) => {
    const encryptKeys = {};
    const shiftedArrays = {};
    let nextArrayForShift = compactBinaryKey56
    for (let i = 1; i < tableForCyclicShift.length; ++i) {
        shiftedArrays[i] = cyclicShift(nextArrayForShift, tableForCyclicShift[i]);
        nextArrayForShift = shiftedArrays[i];
    }
    let index = 1;
    for (let array of Object.values(shiftedArrays)) {
        encryptKeys[index] = createCompactBinaryKeyFromEnlarged48(array, keyTable2);
        ++index;
    }
    return encryptKeys;
}