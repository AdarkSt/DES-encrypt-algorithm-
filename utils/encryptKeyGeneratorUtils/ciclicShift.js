export const cyclicShift = (array, stepCount) => {
    const shiftedArray = [];
    for (let i = stepCount; i < array.length; ++i) {
        shiftedArray.push(array[i]);
    }
    for (let i = 0; i < stepCount; ++i) {
        shiftedArray.push(array[i]);
    }

    return shiftedArray;
}