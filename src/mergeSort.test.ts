import merge from '../src/mergeSort';

describe('Merge Sort', () => {
    it('should return a sorted array by ascending order', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [6, 4, 2];
        const collection3 = [7, 8, 9];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
