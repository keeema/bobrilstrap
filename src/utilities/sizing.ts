import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type Percentage = 25 | 50 | 75 | 100 | "auto";
const percentages: Percentage[] = [25, 50, 75, 100, "auto"];

export const width = createFilledDictionary(percentages.map((percentage) => [percentage, b.styleDef(`w-${percentage}`)]));
export const height = createFilledDictionary(percentages.map((percentage) => [percentage, b.styleDef(`h-${percentage}`)]));
export const maxWidth = createFilledDictionary(percentages.map((percentage) => [percentage, b.styleDef(`mw-${percentage}`)]));
export const maxHeight = createFilledDictionary(percentages.map((percentage) => [percentage, b.styleDef(`mh-${percentage}`)]));
export const minWidthToViewport = createFilledDictionary(percentages.map((percentage) => [percentage, b.styleDef(`min-vw-${percentage}`)]));
export const minHeightToViewport = createFilledDictionary(
    percentages.map((percentage) => [percentage, b.styleDef(`min-vh-${percentage}`)])
);
export const widthToViewport = createFilledDictionary(percentages.map((percentage) => [percentage, b.styleDef(`vw-${percentage}`)]));
export const heightToViewport = createFilledDictionary(percentages.map((percentage) => [percentage, b.styleDef(`vh-${percentage}`)]));
