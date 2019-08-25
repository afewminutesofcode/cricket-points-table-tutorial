import { teamWon } from "../points-table/teamWon";
import { matches } from "../data/matches";

it("teamWon.", () => {
  expect(
    teamWon({
      matches,
      teamNum: "t1",
      team: "ENG",
      stat: "Ru"
    })
  ).toBe(6);
});
