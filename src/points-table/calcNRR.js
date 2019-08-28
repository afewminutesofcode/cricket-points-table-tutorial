export const calcNRR = ({
  runsFor,
  oversFor,
  runsAgainst,
  oversAgainst
}) => {
  const forTotal = runsFor / oversFor;
  const againstTotal = runsAgainst / oversAgainst;
  return (forTotal - againstTotal).toFixed(3);
};
