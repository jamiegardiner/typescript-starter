import { sayHello } from "./say-hello";

describe("sayHello", () => {
  it("should say hello", () => {
    expect(sayHello()).toEqual("Hello World!");
  });
});
