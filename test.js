const test = require("node:test"), assert = require("node:assert");
const { scale, gramsToCups, fraction } = require("./index");
const base = [{ name: "flour", grams: 240 }, { name: "butter", grams: 170 }, { name: "egg yolk", count: 1 }];
test("doubles a batch", () => { const r = scale(base, 24, 48); assert.equal(r[0].grams, 480); assert.equal(r[1].grams, 340); assert.equal(r[2].count, 2); });
test("egg counts round up", () => assert.equal(scale(base, 24, 30)[2].count, 2));
test("rejects bad yields", () => assert.throws(() => scale(base, 0, 10), RangeError));
test("grams to cups", () => { assert.equal(gramsToCups("flour", 240), 2); assert.equal(fraction(gramsToCups("butter", 170)), "3/4"); });
test("fractions", () => { assert.equal(fraction(1.5), "1 1/2"); assert.equal(fraction(0.99), "1"); assert.equal(fraction(0.3), "1/3"); });
