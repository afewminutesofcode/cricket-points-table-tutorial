import { cricketPointsTableStats } from "./cricketPointsTableStats";

export const pointsTableObj = ({
  teams,
  matches,
  config
}) => {
  return teams.reduce((obj, team) => {
    return {
      ...obj,
      [team]: cricketPointsTableStats({
        matches,
        team,
        config
      })
    };
  }, {});
};
