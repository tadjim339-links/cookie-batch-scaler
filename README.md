# cookie-batch-scaler

A tiny dependency-free JavaScript helper that scales a baking recipe from one batch size to another and converts gram weights to US cups, rounded to kitchen-friendly fractions (1/8, 1/4, 1/3, 3/8, ...).

```js
const { scale, gramsToCups, fraction } = require("./index");

const recipe = [
  { name: "flour", grams: 240 },
  { name: "butter", grams: 170 },
  { name: "egg yolk", count: 1 },
];

scale(recipe, 24, 36);
// [{ name: "flour", grams: 360 }, { name: "butter", grams: 255 }, { name: "egg yolk", count: 2 }]

fraction(gramsToCups("flour", 360)); // "3"
```

## Notes

- Counted items (eggs, yolks) round **up**, so a small batch never gets zero eggs.
- Cup conversions use rounded weights per US cup: flour 120 g, ground almonds 96 g, powdered sugar 120 g, butter 227 g, sugar 200 g. Weigh in grams when you can; cups are approximate.
- `scale` throws a `RangeError` for yields that are not positive numbers.

## Tests

```
npm test
```

## Want it in the browser?

If you would rather not run code, the same idea is available as a point-and-click tool: you can [scale a simple tea cookie recipe for any batch size](https://empresscookies.com/recipe/?utm_source=github&utm_medium=readme) with a cups/grams toggle (empresscookies.com).

MIT licensed.
