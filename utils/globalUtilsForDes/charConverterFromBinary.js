import { convertToDecimal } from "./convertToDecimal.js";
import { modifyerForConvertationToDecimal } from "./modifyerForConvertationToDecimal.js";

export const charConverterFromBinary = (parts8Bit) => {
    const charCodesArray = [];
    for (let part of Object.values(parts8Bit)) {
        charCodesArray.push(convertToDecimal(modifyerForConvertationToDecimal(part)));
    }
    return charCodesArray;
}