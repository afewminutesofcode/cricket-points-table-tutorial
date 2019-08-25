import { nonDlmMatches } from "./nonDlmMatches";
import { dlmMatches } from "./dlmMatches";
import { adjustments } from "./adjustments";

export const matches = [
  ...nonDlmMatches,
  ...dlmMatches,
  ...adjustments
];
