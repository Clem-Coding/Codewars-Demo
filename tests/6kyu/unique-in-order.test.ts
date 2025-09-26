import { uniqueInOrder } from "@6kyu/unique-in-order";

describe("Test", () => {
  test("basic tests", () => {
    expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual(["A", "B", "C", "D", "A", "B"]);
    expect(uniqueInOrder("ABBCcA")).toEqual(["A", "B", "C", "c", "A"]);
    expect(uniqueInOrder("")).toEqual([]);
    expect(uniqueInOrder([])).toEqual([]);
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    expect(uniqueInOrder("A")).toEqual(["A"]);
    expect(uniqueInOrder([1, 1, 1, 1])).toEqual([1]);
    expect(uniqueInOrder([1, 2, 2, 1, 1])).toEqual([1, 2, 1]);
    expect(uniqueInOrder("AA")).toEqual(["A"]);
    expect(uniqueInOrder("ABABAB")).toEqual(["A", "B", "A", "B", "A", "B"]);
  });
});
