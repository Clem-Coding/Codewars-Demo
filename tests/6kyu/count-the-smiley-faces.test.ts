import { countSmileys } from "@6kyu/count-the-smiley-faces";

describe("Basic Testing", () => {
  test("Should return the total number of smiling faces in the array", () => {
    expect(countSmileys([])).toBe(0);
    expect(countSmileys([":D", ":~)", ";~D", ":)"])).toBe(4);
    expect(countSmileys([":)", ":(", ":D", ":O", ":;"])).toBe(2);
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);

    // Additional tests added by myself because the kata on Codewars did not cover the order,
    // The optional nose, or repetition issues. Reported problem
    expect(countSmileys([":>D", ";-(", "::-)", ":D:)"])).toBe(0);
    expect(countSmileys([":))", ";;D", ":~D)", ";-~)"])).toBe(0);
  });
});
