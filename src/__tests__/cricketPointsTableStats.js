import { cricketPointsTableStats } from "../points-table/cricketPointsTableStats";
import { matches } from "../data/matches";

const config = { pts4Win: 2, pts4NR: 1 };

const expectedData = {
  lost: 1,
  netrr: "0.809",
  noresult: 1,
  oversAgainst: 390,
  oversFor: 381,
  played: 9,
  pts: 15,
  runsAgainst: 1998,
  runsFor: 2260,
  team: "IND",
  won: 7
};

it("cricketPointsTableStats IND", () => {
  expect(
    cricketPointsTableStats({
      matches,
      team: "IND",
      config
    })
  ).toMatchObject(expectedData);
});
