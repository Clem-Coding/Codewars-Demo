import high from "@6kyu/highest-scoring-word";

describe("high", () => {
  test("should return the highest scoring word", () => {
    expect(high("man i need a taxi up to ubud")).toBe("taxi");
    expect(high("what time are we climbing up the volcano")).toBe("volcano");
    expect(high("take me to semynak")).toBe("semynak");
    expect(high("aa b")).toBe("aa");
    expect(high("b aa")).toBe("b");
    expect(high("bb d")).toBe("bb");
    expect(high("d bb")).toBe("d");
    expect(high("aaa b")).toBe("aaa");
  });
});
