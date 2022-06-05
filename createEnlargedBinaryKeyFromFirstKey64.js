import { binaryTextCreator } from "./utils/globalUtilsForDes/binaryTextCreator.js";
import { sumOfArray } from "./utils/globalUtilsForDes/sumOfArray.js";

import { createObjectsOfBinaryText } from "./createObjectsOfBinaryText.js";

export const createEnlargedBinaryKeyFromFirstKey64 = (firstKey) => {
    const binaryOfFirstKey = binaryTextCreator(createObjectsOfBinaryText(firstKey));
    const enlargedBinaryOfFirstKey64 = []
    const partsOfBinaryKey = {
        firstPart: binaryOfFirstKey.slice(0, 7),
        secondPart: binaryOfFirstKey.slice(7, 14),
        thirdPart: binaryOfFirstKey.slice(14, 21),
        fourthPart: binaryOfFirstKey.slice(21, 28),
        fifthPart: binaryOfFirstKey.slice(28, 35),
        sixthPart: binaryOfFirstKey.slice(35, 42),
        seventhPart: binaryOfFirstKey.slice(42, 49),
        eighthPart: binaryOfFirstKey.slice(49, 56),
    }
    for (let part of Object.keys(partsOfBinaryKey)) {
        if (sumOfArray(partsOfBinaryKey[part]) % 2 == 0) {
            partsOfBinaryKey[part].push(1);
        } else {
            partsOfBinaryKey[part].push(0);
        }
    }
    for (let arr of Object.values(partsOfBinaryKey)) {
        for (let item of arr) {
            enlargedBinaryOfFirstKey64.push(arr[item]);
        }
    }
    return enlargedBinaryOfFirstKey64;
}