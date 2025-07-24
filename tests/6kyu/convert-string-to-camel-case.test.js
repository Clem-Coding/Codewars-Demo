import toCamelCase from "@6kyu/convert-string-to-camel-case";

describe("toCamelCase", () => {
  test("should return empty string when input is empty", () => {
    expect(toCamelCase("")).toBe("");
  });

  test("should convert snake_case to camelCase", () => {
    expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior");
  });

  test("should convert kebab-case to CamelCase", () => {
    expect(toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior");
  });

  test("should handle consecutive capitals", () => {
    expect(toCamelCase("A-B-C")).toBe("ABC");
  });
});
