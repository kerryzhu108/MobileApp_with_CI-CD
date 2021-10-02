var functions = require("./../../src/functions/get_cost");

test("gets cost of single known item", () => {
    expect(functions.get_cost("apple")).toBe(1.00);
});

test("throw an error with invalid item name", () => {
    expect(() => functions.get_cost("pineapple")).toThrowError();
});

test("throw an error with invalid item name in total cost", () => {
    var checkout = [
        {
            "item": "pineapple",
            "quantity": 1
        }
    ]
    expect(() => functions.calculate_total_cost(checkout, 0.13)).toThrowError();
});

test("throw an error with invalid item quantity", () => {
    var checkout = [
        {
            "item": "apple",
            "quantity": -1
        }
    ]
    expect(() => functions.calculate_total_cost(checkout, 0.13)).toThrowError();
});

test("calculate the total cost of a single item", () => {
    var checkout = [
        {
            "item": "apple",
            "quantity": 5
        }
    ]
    expect(functions.calculate_total_cost(checkout, 0.13)).toBeCloseTo(5.65, 2);
});

test("calculate the total cost of multiple items", () => {
    var checkout = [
        {
            "item": "apple",
            "quantity": 5
        },
        {
            "item": "banana",
            "quantity": 2
        }
    ]
    expect(functions.calculate_total_cost(checkout, 0.13)).toBeCloseTo(9.04, 2);
});