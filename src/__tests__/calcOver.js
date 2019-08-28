import { calcOver } from "../helpers/calcOver";

it("calcOver", () => {
  expect(calcOver("1")).toBe(1);
  expect(calcOver("1.0")).toBe(1);
  expect(calcOver("1.1")).toBe(1.167);
  expect(calcOver("1.2")).toBe(1.333);
  expect(calcOver("1.3")).toBe(1.5);
  expect(calcOver("1.4")).toBe(1.667);
  expect(calcOver("1.5")).toBe(1.833);
});
