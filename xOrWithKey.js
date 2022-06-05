export const xOrWithKey = (enlargedPartR, key) => {
    const withKey = [];
    for (let i = 0; i < key.length; ++i) {
        withKey.push(key[i] ^ enlargedPartR[i]);
    }
    return withKey;
}