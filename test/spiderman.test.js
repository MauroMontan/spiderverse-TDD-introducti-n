import Spiderman from "../app/spiderman.js";

describe("Unit test for Spiderman class", () => {
  test("Case 1 Dummy", () => {
    const spiderman = new Spiderman("Peter Parker", 31, "Andrew Garfiled", 2);
    expect(spiderman.name).toBe("Peter Parker");

    expect(spiderman.age).toBe(31);
  });

  test("2) Using getInfo method", () => {
    const tobeyMaguire = new Spiderman("Sony Studios", 46, "tobey maguire", 3);

    expect(tobeyMaguire.getInfo()).toBe(
      "Hi! i am tobey maguire from Sony Studios"
    );
  });
});
