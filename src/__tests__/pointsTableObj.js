import { pointsTableObj } from "../points-table/pointsTableObj";
import { teamsInMatches } from "../helpers/teamsInMatches";
import { matches } from "../data/matches";

const config = { pts4Win: 2, pts4NR: 1 };

it("pointsTableObj", () => {
  expect(
    pointsTableObj({
      teams: teamsInMatches(matches),
      matches,
      config
    })
  ).toMatchObject({});
});
