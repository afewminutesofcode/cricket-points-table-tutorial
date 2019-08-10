import { calcCompletedMatches } from "../helpers/calcCompletedMatches";
import { getOppTeam } from "../helpers/getOppTeam";

export const teamWon = ({
  matches,
  teamNum,
  team,
  stat
}) => {
  const oppTeam = getOppTeam(teamNum);
  return calcCompletedMatches(
    matches,
    teamNum,
    team
  ).filter(
    match =>
      match[`${teamNum}${stat}`] >
      match[`${oppTeam}${stat}`]
  ).length;
};
