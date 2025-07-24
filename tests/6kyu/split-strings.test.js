import solution from "@6kyu/split-strings";

describe("Split Strings", () => {
  test("basic tests", () => {
    expect(solution("abcdef")).toEqual(["ab", "cd", "ef"]);
    expect(solution("abcdefg")).toEqual(["ab", "cd", "ef", "g_"]);
    expect(solution("")).toEqual([]);
  });
});
