import solution from "@6kyu/break-camel-case";

describe("Sample tests", () => {
  test("Sample test 1", () => {
    expect(solution("")).toBe("");
  });

  test("Sample test 2", () => {
    expect(solution("camelCasing")).toBe("camel Casing");
  });

  test("Sample test 3", () => {
    expect(solution("camelCasingTest")).toBe("camel Casing Test");
  });
});
