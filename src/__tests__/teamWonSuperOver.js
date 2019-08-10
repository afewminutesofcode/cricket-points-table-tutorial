import { teamWonSuperOver } from "../points-table/teamWonSuperOver";
import { matches } from "../data/matches";

it("teamWonSuperOver.", () => {
  expect(
    teamWonSuperOver({
      matches,
      teamNum: "t1",
      team: "ENG"
    })
  ).toBe(0);
});
