import numberOfPairs from "@6kyu/pair-of-gloves";

describe("Fixed Tests", () => {
  const tests = [
    [["red", "red"], 1],
    [["red", "green", "blue"], 0],
    [["gray", "black", "purple", "purple", "gray", "black"], 3],
  ];

  tests.forEach(([input, expected]) => {
    test(`Testing for ${input.join(",")}`, () => {
      expect(numberOfPairs(input)).toBe(expected);
    });
  });
});
