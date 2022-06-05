import { standards } from "./standards.js";

import { convertToDecimal } from "./utils/globalUtilsForDes/convertToDecimal.js";
import { functionEForEnlargePartR48 } from "./functionEForEnlargePartR48.js";
import { xOrWithKey } from "./xOrWithKey.js";
import { sliceTo6BitParts } from "./utils/feystelFunctionUtils/sliceTo6BitParts.js";
import { convertToByte } from "./utils/globalUtilsForDes/convertToByte.js";
import { converteInFeystel32 } from "./utils/feystelFunctionUtils/converteInFeystel32.js";

export const feystelFunction = (sBox, key, partR) => {
    const arrayOfSBoxConverted32 = [];
    let fPartR = functionEForEnlargePartR48(partR, standards.tableForEFunction);
    const mixedWithXor = xOrWithKey(fPartR, key);
    const partsOf6Bit = sliceTo6BitParts(mixedWithXor);
    let index = 1;
    for (let part of Object.values(partsOf6Bit)) {
        let row = [part[0], part[5]];
        let convertedRow = convertToDecimal(row);

        let coll = part.slice(1, 5);
        let convertedColl = convertToDecimal(coll);

        let value = sBox[index][convertedRow][convertedColl];

        for (let sim of convertToByte(value).byte4) {
            arrayOfSBoxConverted32.push(sim);
        }
        ++index;
    }
    return converteInFeystel32(arrayOfSBoxConverted32, standards.tableForFeystelConcertation);
}