import * as b from "bobril";
import { createDictionary } from "./dict";

export type Alignment = "start" | "center" | "end" | "between" | "around";
const alignments: Alignment[] = ["start", "center", "end", "between", "around"];

export const alignItems = createDictionary(alignments.map((value) => [value, b.styleDef(`align-items-${value}`)]));
export const alignSelf = createDictionary(alignments.map((value) => [value, b.styleDef(`align-self-${value}`)]));
export const justifyContent = createDictionary(alignments.map((value) => [value, b.styleDef(`justify-content-${value}`)]));
