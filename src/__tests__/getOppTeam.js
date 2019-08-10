import { getOppTeam } from "../helpers/getOppTeam";

it("getOppTeam.", () => {
  expect(getOppTeam("t1")).toBe("t2");
  expect(getOppTeam("t2")).toBe("t1");
});
