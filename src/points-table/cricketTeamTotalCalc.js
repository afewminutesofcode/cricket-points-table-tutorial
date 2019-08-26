import {
  WON,
  LOST,
  TEAM1,
  TEAM2,
  NORESULT,
  POINTS
} from "../helpers/constants";
import { teamWon } from "./teamWon";
import { teamWonSuperOver } from "./teamWonSuperOver";

import { teamLost } from "./teamLost";
import { teamLostSuperOver } from "./teamLostSuperOver";

import { teamNoResult } from "./teamNoResult";

export const cricketTeamTotalCalc = ({
  config,
  matches,
  team,
  stat
}) => {
  const { pts4Win, pts4NR } = config;
  // need to look at what is getting passed in here
  switch (stat) {
    case WON:
      return (
        teamWon({
          matches,
          teamNum: TEAM1,
          team,
          stat: "Ru"
        }) +
        teamWon({
          matches,
          teamNum: TEAM2,
          team,
          stat: "Ru"
        }) +
        teamWonSuperOver({
          matches,
          teamNum: TEAM1,
          team,
          stat: "SupOvrR"
        }) +
        teamWonSuperOver({
          matches,
          teamNum: TEAM2,
          team,
          stat: "SupOvrR"
        })
      );
    case LOST:
      return (
        teamLost({
          matches,
          teamNum: TEAM1,
          team,
          stat: "Ru"
        }) +
        teamLost({
          matches,
          teamNum: TEAM2,
          team,
          stat: "Ru"
        }) +
        teamLostSuperOver({
          matches,
          teamNum: TEAM1,
          team,
          stat: "SupOvrR"
        }) +
        teamLostSuperOver({
          matches,
          teamNum: TEAM2,
          team,
          stat: "SupOvrR"
        })
      );
    case NORESULT:
      return (
        teamNoResult({
          matches,
          teamNum: TEAM1,
          team
        }) +
        teamNoResult({
          matches,
          teamNum: TEAM2,
          team
        })
      );
    case POINTS:
      return (
        (teamWon({
          matches,
          teamNum: TEAM1,
          team,
          stat: "Ru"
        }) +
          teamWon({
            matches,
            teamNum: TEAM2,
            team,
            stat: "Ru"
          }) +
          teamWonSuperOver({
            matches,
            teamNum: TEAM1,
            team,
            stat: "SupOvrR"
          }) +
          teamWonSuperOver({
            matches,
            teamNum: TEAM2,
            team,
            stat: "SupOvrR"
          })) *
          pts4Win +
        +(
          teamNoResult({
            matches,
            teamNum: TEAM1,
            team
          }) +
          teamNoResult({
            matches,
            teamNum: TEAM2,
            team
          })
        ) *
          pts4NR
      );
    default:
      return;
  }
};
