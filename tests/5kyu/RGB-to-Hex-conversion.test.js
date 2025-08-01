import rgb from "@5kyu/RGB-to-Hex-conversion";

describe("rgb", () => {
  function doTest(r, g, b, expected) {
    const actual = rgb(r, g, b);
    const message = `for r = ${r} g = ${g} b = ${b}`;
    expect(actual).toBe(expected);
  }

  test("Sample Tests", () => {
    doTest(0, 0, 0, "000000");
    doTest(0, 0, -20, "000000");
    doTest(300, 255, 255, "FFFFFF");
    doTest(173, 255, 47, "ADFF2F");
    doTest(10, 0, 0, "0A0000");
  });
});
