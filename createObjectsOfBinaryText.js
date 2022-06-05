import { convertToByte } from "./utils/globalUtilsForDes/convertToByte.js";

export const createObjectsOfBinaryText = (text) => {
    let encoder = new TextEncoder();
    const encodedText = encoder.encode(text);

    const ObjectsOfBinaryText = [];

    for (let num of encodedText) {
        ObjectsOfBinaryText.push(convertToByte(num));
    }

    return ObjectsOfBinaryText;
}