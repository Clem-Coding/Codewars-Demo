import { flattenAndSort } from "@7kyu/flatten-and-sort-an-array";

describe("flattenAndSort", () => {
  it("should pass sample tests", () => {
    expect(flattenAndSort([])).toEqual([]);
    expect(flattenAndSort([[], []])).toEqual([]);
    expect(flattenAndSort([[], [1]])).toEqual([1]);
    expect(
      flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toEqual([1, 2, 3, 4, 5, 6, 100]);
  });

  // TODO Add your tests here

  it("should pass random tests", () => {
    for (let i = 0; i < 10; i++) {
      const arr = Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () =>
        Array.from({ length: Math.floor(Math.random() * 5) }, () => Math.floor(Math.random() * 100))
      );
      const expected = arr.flat().sort((a, b) => a - b);
      expect(flattenAndSort(arr)).toEqual(expected);
    }
  });
});
