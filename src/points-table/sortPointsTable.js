export const sortPointsTable = arr =>
  arr.sort((a, b) => {
    if (a.pts === b.pts && a.netrr === b.netrr) {
      return b.won - a.won;
    } else if (a.pts === b.pts) {
      return b.netrr - a.netrr;
    } else {
      return b.pts - a.pts;
    }
  });
