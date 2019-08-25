import { teamLost } from "../points-table/teamLost";
import { matches } from "../data/matches";

it("teamLost.", () => {
  expect(
    teamLost({
      matches,
      teamNum: "t1",
      team: "ENG",
      stat: "Ru"
    })
  ).toBe(3);
});
