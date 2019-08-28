import { cricketTeamStat } from "../points-table/cricketTeamStat";
import { TEAM1, TEAM2 } from "./constants";

export const cricketTeamTotal = ({
  matches,
  team,
  stat,
  opp,
  filterTeam
}) => {
  return (
    cricketTeamStat({
      matches,
      teamNum: TEAM1,
      team,
      stat,
      opp,
      filterTeam
    }) +
    cricketTeamStat({
      matches,
      teamNum: TEAM2,
      team,
      stat,
      opp,
      filterTeam
    })
  );
};
