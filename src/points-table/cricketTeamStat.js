import { calcOver } from "../helpers/calcOver";
import { getOppTeam } from "../helpers/getOppTeam";
export const cricketTeamStat = ({
  matches,
  teamNum = "t1",
  team,
  stat,
  opp,
  filterTeam = false
}) => {
  const oppTeam = getOppTeam(teamNum);
  const showTeam = opp === true ? oppTeam : teamNum;
  const statName = filterTeam
    ? `${stat}`
    : `${showTeam}${stat}`;
  const statTotal = matches
    .filter(
      match =>
        match[teamNum] === team && match["type"] === 1
      // && match["fin"] === 1
    )
    .reduce((total, match) => {
      const value =
        stat === "Ov"
          ? calcOver(match[statName])
          : match[statName];
      return total + value;
    }, 0);
  return statTotal;
};
