import domainName from "@5kyu/extract-domain-name-from-url";

describe("Domain name extraction tests", () => {
  const tlds = [
    "com",
    "co.jp",
    "ru",
    "co.za",
    "org",
    "net",
    "it",
    "tv",
    "pro",
    "edu",
    "de",
    "biz",
    "io",
    "co.uk",
    "jp",
    "us",
  ];

  const randomDomainName = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let name = "";
    const length = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < length; i++) {
      name += letters[Math.floor(Math.random() * letters.length)];
    }
    return name;
  };

  test("Fixed sample tests", () => {
    expect(domainName("http://google.com")).toBe("google");
    expect(domainName("http://google.co.jp")).toBe("google");
    expect(domainName("www.xakep.ru")).toBe("xakep");
    expect(domainName("https://youtube.com")).toBe("youtube");
  });

  test("30 random www subdomains", () => {
    for (let i = 0; i < 30; i++) {
      const domain = randomDomainName();
      const tld = tlds[Math.floor(Math.random() * tlds.length)];
      const url = `http://www.${domain}.${tld}`;
      const expected = domain;
      expect(domainName(url)).toBe(expected);
    }
  });
});
