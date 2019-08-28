import { cricketTeamStat } from "../points-table/cricketTeamStat";
import { matches } from "../data/matches";
import { SHOW_TEAM } from "../helpers/constants";

it("cricketTeamStat total Played", () => {
  expect(
    cricketTeamStat({
      matches,
      teamNum: "t1",
      team: "IND",
      stat: "fin",
      opp: SHOW_TEAM,
      filterTeam: true
    }) +
      cricketTeamStat({
        matches,
        teamNum: "t2",
        team: "IND",
        stat: "fin",
        opp: SHOW_TEAM,
        filterTeam: true
      })
  ).toBe(9);
});

it("cricketTeamStat total Runs", () => {
  expect(
    cricketTeamStat({
      matches,
      teamNum: "t1",
      team: "IND",
      stat: "Ru",
      opp: SHOW_TEAM,
      filterTeam: false
    }) +
      cricketTeamStat({
        matches,
        teamNum: "t2",
        team: "IND",
        stat: "Ru",
        opp: SHOW_TEAM,
        filterTeam: false
      })
  ).toBe(2260);
});
it("cricketTeamStat total Overs", () => {
  expect(
    cricketTeamStat({
      matches,
      teamNum: "t1",
      team: "IND",
      stat: "Ov",
      opp: SHOW_TEAM,
      filterTeam: false
    }) +
      cricketTeamStat({
        matches,
        teamNum: "t2",
        team: "IND",
        stat: "Ov",
        opp: SHOW_TEAM,
        filterTeam: false
      })
  ).toBe(381);
});
