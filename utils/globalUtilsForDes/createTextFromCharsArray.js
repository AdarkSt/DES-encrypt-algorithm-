export const createTextFromCharsArray = (charCodesArray) => {
    let text = '';
    for (let char of charCodesArray) {
        text += String.fromCharCode(char)
    }
    return text;
}