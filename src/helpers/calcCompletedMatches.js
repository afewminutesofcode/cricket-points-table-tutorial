export const calcCompletedMatches = (
  matches,
  teamNum,
  team
) =>
  matches.filter(
    match =>
      match[teamNum] === team &&
      match["type"] === 1 &&
      match["fin"] === 1
  );
