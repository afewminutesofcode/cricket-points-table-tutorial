import { calcNRR } from "../points-table/calcNRR";

it("calcNRR for IND", () => {
  expect(
    calcNRR({
      runsFor: 2260,
      oversFor: 381.0,
      runsAgainst: 1998,
      oversAgainst: 390.0
    })
  ).toBe("0.809");
});
