import { teamNoResult } from "../points-table/teamNoResult";
import { matches } from "../data/matches";

it("teamNoResult.", () => {
  expect(
    teamNoResult({
      matches,
      teamNum: "t1",
      team: "SA",
      stat: "Ru"
    })
  ).toBe(1);
});
