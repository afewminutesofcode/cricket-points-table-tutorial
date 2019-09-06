export const sortPointsTable = arr =>
  arr.sort((a, b) => {
    if (a.pts === b.pts && a.won === b.won) {
      return b.netrr - a.netrr;
    } else if (a.pts === b.pts) {
      return b.netrr - a.netrr;
    } else {
      return b.pts - a.pts;
    }
  });
