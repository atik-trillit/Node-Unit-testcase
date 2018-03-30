import Arithmetic from './../src/index';
import RestApi from './../src/rest-api';
const request = require('supertest');

let opt = new Arithmetic();
let api = new RestApi();


describe("Arithmetic Operations", () => {
    test("Add 2 Positive Numbers", () => {
        expect(opt.add(3, 4)).toBe(7);

    });

    test("Add 2 Negative Numbers", () => {
        expect(opt.add(3, -4)).toBe(-1);

    });
    test("Add + -  Numbers", () => {
        expect(opt.add(-3, 4)).toBe(1);
    });

    test("Add - +  Numbers", () => {
        expect(opt.add(-3, -4)).toBe(-7);
    });


})

describe("Multiplication Operations", () => {
    test("Multiply Positive Two No", () => {
        expect(opt.multiply(1, 2)).toBe(2);

    });
    test("Multiply Negative Two No", () => {
        expect(opt.multiply(-1, -2)).toBe(2);

    });
    test("Multiply + -  No", () => {
        expect(opt.multiply(1, -2)).toBe(-2);
    });
    test("Multiply - +  No", () => {
        expect(opt.multiply(-1, 2)).toBe(-2);
    });
    test("Multiply by 0 with +", () => {
        expect(opt.multiply(0, 1)).toBe(0);

    });
    test("Multiply by 0 with -", () => {
        expect(opt.multiply(0, -1)).toBe(-0);

    });

});

describe("Rest Api test Case Suit--->", () => {
    test("REst Api Test", () => {
        api.startServer();
        api.sayHello();
        return request(api.getApp()).get('/hello').expect(200);
    });
})