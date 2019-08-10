import { TEAM1, TEAM2 } from "./constants";

export const getOppTeam = teamNum =>
  teamNum === TEAM2 ? TEAM1 : TEAM2;
