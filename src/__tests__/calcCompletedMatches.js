import { calcCompletedMatches } from "../helpers/calcCompletedMatches";
import { matches } from "../data/matches";

it("calcCompletedMatches", () => {
  expect(calcCompletedMatches(matches)).toHaveLength(45);
});
