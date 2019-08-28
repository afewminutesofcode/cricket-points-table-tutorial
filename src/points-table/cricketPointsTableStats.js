import { cricketTeamTotal } from "../helpers/cricketTeamTotal";
import {
  SHOW_TEAM,
  SHOW_OPP,
  WON,
  LOST,
  POINTS
} from "../helpers/constants";
import { cricketTeamTotalCalc } from "./cricketTeamTotalCalc";
import { calcNRR } from "./calcNRR";
export const cricketPointsTableStats = ({
  matches,
  team,
  config
}) => {
  const runsFor = cricketTeamTotal({
    matches,
    team,
    stat: "Ru",
    opp: SHOW_TEAM
  });
  const oversFor = cricketTeamTotal({
    matches,
    team,
    stat: "Ov",
    opp: SHOW_TEAM
  });
  const runsAgainst = cricketTeamTotal({
    matches,
    team,
    stat: "Ru",
    opp: SHOW_OPP
  });
  const oversAgainst = cricketTeamTotal({
    matches,
    team,
    stat: "Ov",
    opp: SHOW_OPP
  });
  return {
    team: team,
    played: cricketTeamTotal({
      matches,
      team,
      stat: "fin",
      opp: SHOW_TEAM,
      filterTeam: true
    }),
    won: cricketTeamTotalCalc({
      config,
      matches,
      team,
      stat: WON,
      SHOW_TEAM
    }),
    lost: cricketTeamTotalCalc({
      config,
      matches,
      team,
      stat: LOST
    }),
    noresult: cricketTeamTotal({
      matches,
      team,
      stat: "NR",
      opp: SHOW_TEAM
    }),
    runsFor: runsFor,
    oversFor: oversFor,
    runsAgainst: runsAgainst,
    oversAgainst: oversAgainst,
    netrr: calcNRR({
      runsFor,
      oversFor,
      runsAgainst,
      oversAgainst
    }),
    pts: cricketTeamTotalCalc({
      config,
      matches,
      team,
      stat: POINTS
    })
  };
};
