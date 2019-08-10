import { calcCompletedMatches } from "../helpers/calcCompletedMatches";

export const teamNoResult = ({
  matches,
  teamNum,
  team
}) => {
  return calcCompletedMatches(
    matches,
    teamNum,
    team
  ).filter(match => match[`${teamNum}NR`] === 1).length;
};
