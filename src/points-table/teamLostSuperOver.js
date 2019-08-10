import { teamLost } from "./teamLost";

export const teamLostSuperOver = ({
  matches,
  teamNum,
  team,
  stat = "SupOvrR"
}) => {
  return teamLost({ matches, teamNum, team, stat });
};
