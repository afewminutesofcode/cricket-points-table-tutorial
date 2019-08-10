import { teamWon } from "./teamWon";

export const teamWonSuperOver = ({
  matches,
  teamNum,
  team,
  stat = "SupOvrR"
}) => {
  return teamWon({ matches, teamNum, team, stat });
};
