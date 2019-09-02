import { teamsInMatches } from "../helpers/teamsInMatches";
import { matches } from "../data/matches";

it("teamsInMatches", () => {
  expect(teamsInMatches(matches)).toEqual([
    "AFG",
    "AUS",
    "BAN",
    "ENG",
    "IND",
    "NZ",
    "PAK",
    "SA",
    "SL",
    "WI"
  ]);
});
