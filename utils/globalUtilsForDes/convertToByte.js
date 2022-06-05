export const convertToByte = (number) => {
    let zeros = "";
    let zeros4 = "";
    const binaryString = number.toString(2)

    const byteAndBinary = {
        binary: binaryString,
        byte: binaryString,
        value: number,
        byte4: binaryString,
    }

    if (binaryString.length < 8) {
        for (let i = 1; i <= 8 - binaryString.length; ++i) {
            zeros += '0';
        }
        byteAndBinary.byte = zeros + binaryString;
    }
    if (binaryString.length < 4) {
        for (let i = 1; i <= 4 - binaryString.length; ++i) {
            zeros4 += '0';
        }
        byteAndBinary.byte4 = zeros4 + binaryString;
    }

    return byteAndBinary;
}