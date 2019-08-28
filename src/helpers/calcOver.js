import { splitOver } from "./splitOver";
import { makeFloat } from "./makeFloat";

export const calcOver = overStr => {
  /*
    calc nrr overs here
    (1): 0.167 (2): 0.333 (3): 0.500 (4): 0.667 (5): 0.833
  */
  const over = Number(splitOver(overStr)[0]);
  const balls = Number(splitOver(overStr)[1]);
  const ballsCalculated =
    balls > 0 ? (balls / 6).toFixed(3) : balls;
  return over + makeFloat(ballsCalculated);
};
