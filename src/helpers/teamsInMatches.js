export const teamsInMatches = matches => [
  ...new Set(
    matches
      .map(match => [match.t1, match.t2])
      .flat()
      .filter(item => item !== "")
      .sort()
  )
];
