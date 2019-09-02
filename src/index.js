import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { pointsTableObj } from "./points-table/pointsTableObj";
import { teamsInMatches } from "./helpers/teamsInMatches";
import { matches } from "./data/matches";
import { tournamentConfig } from "./data/tournamentConfig";
import { sortPointsTable } from "./points-table/sortPointsTable";

function App() {
  const pointsTableData = pointsTableObj({
    teams: teamsInMatches(matches),
    matches,
    config: tournamentConfig
  });
  const sortedPointsTable = sortPointsTable(
    Object.keys(pointsTableData).map(
      key => pointsTableData[key]
    )
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th align="right">P</th>
          <th align="right">W</th>
          <th align="right">L</th>
          <th align="right">NRR</th>
          <th align="right">Pts</th>
        </tr>
      </thead>
      <tbody>
        {sortedPointsTable.map(team => (
          <tr key={team.team}>
            <td component="th" scope="row">
              {team.team}
            </td>
            <td align="right">{team.played}</td>
            <td align="right">{team.won}</td>
            <td align="right">{team.lost}</td>
            <td align="right">{team.netrr}</td>
            <td align="right">{team.pts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
