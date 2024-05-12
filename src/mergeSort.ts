function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const mergedArray = [...collection1, ...collection2, ...collection3];
    return mergedArray.sort((a, b) => a - b);
}

export default merge;
