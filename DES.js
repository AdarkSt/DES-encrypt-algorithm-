import { standards } from "./standards.js";
import { createObjectsOfBinaryText } from "./createObjectsOfBinaryText.js";
import { binaryTextCreator } from "./utils/globalUtilsForDes/binaryTextCreator.js";
import { createEnlargedBinaryKeyFromFirstKey64 } from "./createEnlargedBinaryKeyFromFirstKey64.js";
import { createCompactBinaryKeyFromEnlarged56 } from "./createCompactBinaryKeyFromEnlarged56.js";
import { encryptKeyGenerator } from "./encryptKeyGenerator.js";
import { binaryTextSlicer } from "./utils/globalUtilsForDes/binaryTextSlicer.js";
import { encodeFormula } from "./encodeFormula.js";
import { lastConvertBinary64 } from "./lastConvertBinary64.js";
import { sliceTo8bitParts } from "./utils/globalUtilsForDes/sliceTo8bitParts.js";
import { charConverterFromBinary } from "./utils/globalUtilsForDes/charConverterFromBinary.js";
import { createTextFromCharsArray } from "./utils/globalUtilsForDes/createTextFromCharsArray.js"

let text = "Barevner";

const DES = function(text) {
    console.log("-------------------------------this is my input 8byte text-------------------------------");
    console.log(text);
    console.log("\n");

    const binaryText = binaryTextCreator(createObjectsOfBinaryText(text));
    console.log("-------------------------------this is binary view of input text-------------------------------");
    console.log(binaryText);
    console.log("\n");

    const parts = binaryTextSlicer(binaryText)
    const partR = parts.partR;
    console.log("-------------------------------this is right part of first converted binary view of input text-------------------------------");
    console.log(partR);
    console.log("\n");

    const partL = parts.partL;
    console.log("-------------------------------this is left part of first converted binary view of input text-------------------------------");
    console.log(partL);
    console.log("\n");

    const encryptKeys = encryptKeyGenerator(createCompactBinaryKeyFromEnlarged56(createEnlargedBinaryKeyFromFirstKey64(standards.firstKey), standards.keyTable), standards.tableForCyclicShift, standards.keyTable2);
    console.log("-------------------------------this is 16 generated keys-------------------------------");
    console.log(encryptKeys);
    console.log("\n");

    const encodedText = encodeFormula(partR, partL, standards.sBox, encryptKeys);
    console.log("-------------------------------this is encoded binary text with Feystel function and formula of Des-------------------------------");
    console.log(encodedText);
    console.log("\n");

    const output = lastConvertBinary64(encodedText, standards.tableForLastConvertation);
    console.log("-------------------------------this is last view of binary text with last convert-------------------------------");
    console.log(output);
    console.log("\n");

    const charCodesArray = charConverterFromBinary(sliceTo8bitParts(output));
    console.log("-------------------------------this is array of chars generated from last view of binary text-------------------------------");
    console.log(charCodesArray);
    console.log("\n");

    const encryptedText = createTextFromCharsArray(charCodesArray);
    console.log("-------------------------------this is encrypted text-------------------------------");
    console.log(encryptedText);
    console.log("\n");

    return encryptedText;
}

DES(text);