import { xOrWithKey } from "./xOrWithKey.js";
import { feystelFunction } from "./feystelFunction.js";
import { joiningTwoPartsOfBinaryText } from "./utils/globalUtilsForDes/joiningTwoPartsOfBinaryText.js";

export const encodeFormula = (partR, partL, sBox, encryptKeys) => {
    let encodedFullBinaryText = [];
    let fPartL = partL;
    let fPartR = partR;
    let l = partL;
    for (let i = 1; i <= 16; ++i) {
        l = fPartL;
        fPartL = fPartR;
        fPartR = xOrWithKey(l, feystelFunction(sBox, encryptKeys[i], fPartR));
    }
    encodedFullBinaryText = joiningTwoPartsOfBinaryText(fPartR, fPartL);
    return encodedFullBinaryText;
}