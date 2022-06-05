export const sliceTo8bitParts = (lastConvertBinary64) => {
    const parts8Bit = {
        firstPart: lastConvertBinary64.slice(0, 8),
        secondPart: lastConvertBinary64.slice(8, 16),
        tirthPart: lastConvertBinary64.slice(16, 24),
        forthPart: lastConvertBinary64.slice(24, 32),
        fivthPart: lastConvertBinary64.slice(32, 40),
        sixthPart: lastConvertBinary64.slice(40, 48),
        sevnthPart: lastConvertBinary64.slice(48, 56),
        eithPart: lastConvertBinary64.slice(56, 64),
    }
    return parts8Bit
}