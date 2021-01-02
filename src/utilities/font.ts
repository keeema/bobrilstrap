import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type FontWeight = "bold" | "bolder" | "normal" | "light" | "lighter";
export type FontStyle = "normal" | "italic";
export type FontSize = 1 | 2 | 3 | 4 | 5 | 6;
export type LineHeight = 1 | "sm" | "base" | "lg";

export const fontWeights: FontWeight[] = ["bold", "bolder", "normal", "light", "lighter"];
export const fontStyles: FontStyle[] = ["normal", "italic"];
export const fontSizes: FontSize[] = [1, 2, 3, 4, 5, 6];
export const lineHeights: LineHeight[] = [1, "sm", "base", "lg"];

export const fontWeight = createFilledDictionary(fontWeights.map((value) => [value, b.styleDef(`fw-${value}`)]));
export const fontStyle = createFilledDictionary(fontStyles.map((value) => [value, b.styleDef(`fst-${value}`)]));
export const fontSize = createFilledDictionary(fontSizes.map((value) => [value, b.styleDef(`fs-${value}`)]));
export const fontMonospace = b.styleDef("font-monospace");
export const lineHeight = createFilledDictionary(lineHeights.map((value) => [value, b.styleDef(`lh-${value}`)]));
