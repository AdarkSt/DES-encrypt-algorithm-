export const sliceTo6BitParts = (mixedWithXor) => {
    const parts = {
        firstPart: mixedWithXor.slice(0, 6),
        secondtPart: mixedWithXor.slice(6, 12),
        tirthPart: mixedWithXor.slice(12, 18),
        forthPart: mixedWithXor.slice(18, 24),
        fivthPart: mixedWithXor.slice(24, 30),
        sixthPart: mixedWithXor.slice(30, 36),
        seventhPart: mixedWithXor.slice(36, 42),
        eighthPart: mixedWithXor.slice(42, 48),
    };
    return parts;
}