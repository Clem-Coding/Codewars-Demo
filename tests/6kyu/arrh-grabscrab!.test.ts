import { grabscrab } from "@6kyu/arrh-grabscrab!";

describe("grabscrab", () => {
  it("should pass sample test cases", () => {
    expect(grabscrab("trisf", ["first"])).toEqual(["first"]);
    expect(grabscrab("oob", ["bob", "baobab"])).toEqual([]);
    expect(grabscrab("ainstuomn", ["mountains", "hills", "mesa"])).toEqual(["mountains"]);
    expect(grabscrab("oolp", ["donkey", "pool", "horse", "loop"])).toEqual(["pool", "loop"]);
    expect(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])).toEqual(["sport", "ports"]);
    expect(grabscrab("ourf", ["one", "two", "three"])).toEqual([]);
  });
});
