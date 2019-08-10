import { teamLostSuperOver } from "../points-table/teamLostSuperOver";
import { matches } from "../data/matches";

it("teamLost.", () => {
  expect(
    teamLostSuperOver({
      matches,
      teamNum: "t1",
      team: "ENG"
    })
  ).toBe(0);
});
