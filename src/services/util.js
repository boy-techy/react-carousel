const generateRangeArray = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i);

const isServer = () => {
    return typeof window === "undefined";
};

export {
    generateRangeArray,
    isServer
}
