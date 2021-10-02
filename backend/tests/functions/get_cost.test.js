var functions = require("./../../src/functions/get_cost");

test("gets cost of single known item", () => {
    expect(functions.get_cost("apple")).toBe(1.00);
});

test("throw an error with invalid item name", () => {
    expect(() => functions.get_cost("pineapple")).toThrowError();
});