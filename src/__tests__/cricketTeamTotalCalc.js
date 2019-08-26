import { calcCompletedMatches } from "../helpers/calcCompletedMatches";
import { cricketTeamTotalCalc } from "../points-table/cricketTeamTotalCalc";
import { matches } from "../data/matches";
import {
  WON,
  LOST,
  NORESULT,
  POINTS
} from "../helpers/constants";

const config = { pts4Win: 2, pts4NR: 1 };

it("cricketTeamTotalCalc", () => {
  expect(
    cricketTeamTotalCalc({
      config,
      matches,
      team: "SA",
      stat: WON
    })
  ).toBe(3);
  expect(
    cricketTeamTotalCalc({
      config,
      matches,
      team: "SA",
      stat: LOST
    })
  ).toBe(5);
  expect(
    cricketTeamTotalCalc({
      config,
      matches,
      team: "SA",
      stat: NORESULT
    })
  ).toBe(1);

  expect(
    cricketTeamTotalCalc({
      config,
      matches,
      team: "SA",
      stat: POINTS
    })
  ).toBe(7);
});
