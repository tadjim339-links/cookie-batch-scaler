"use strict";
// Scale a baking recipe to a new batch size and print US cup / gram amounts.
const GRAMS_PER_CUP = { flour: 120, "ground almonds": 96, "powdered sugar": 120, butter: 227, sugar: 200 };

function scale(ingredients, baseYield, wantedYield) {
  if (!(baseYield > 0) || !(wantedYield > 0)) throw new RangeError("yields must be positive numbers");
  const k = wantedYield / baseYield;
  return ingredients.map((i) => ({ ...i, grams: i.grams == null ? undefined : Math.round(i.grams * k * 10) / 10, count: i.count == null ? undefined : Math.ceil(i.count * k - 1e-9) }));
}

function gramsToCups(name, grams) {
  const per = GRAMS_PER_CUP[name];
  if (!per) throw new Error("no cup conversion for " + name);
  return grams / per;
}

const FRACS = [[0, ""], [0.125, "1/8"], [0.25, "1/4"], [1 / 3, "1/3"], [0.375, "3/8"], [0.5, "1/2"], [0.625, "5/8"], [2 / 3, "2/3"], [0.75, "3/4"], [0.875, "7/8"], [1, ""]];
function fraction(x) {
  let w = Math.floor(x), f = x - w, best = FRACS[0];
  for (const p of FRACS) if (Math.abs(f - p[0]) < Math.abs(f - best[0])) best = p;
  if (best[0] === 1) { w += 1; best = FRACS[0]; }
  return ((w ? String(w) : "") + (best[1] ? (w ? " " : "") + best[1] : "")) || "0";
}

module.exports = { scale, gramsToCups, fraction, GRAMS_PER_CUP };
