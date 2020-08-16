import * as b from "bobril";
import { createDictionary } from "../../helpers/dict";

export type Alignment =
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "sm-start"
    | "sm-end"
    | "sm-center"
    | "sm-between"
    | "sm-around"
    | "md-start"
    | "md-end"
    | "md-center"
    | "md-between"
    | "md-around"
    | "lg-start"
    | "lg-end"
    | "lg-center"
    | "lg-between"
    | "lg-around"
    | "xl-start"
    | "xl-end"
    | "xl-center"
    | "xl-between"
    | "xl-around";

const alignments: Alignment[] = [
    "start",
    "center",
    "end",
    "between",
    "around",
    "sm-start",
    "sm-end",
    "sm-center",
    "sm-between",
    "sm-around",
    "md-start",
    "md-end",
    "md-center",
    "md-between",
    "md-around",
    "lg-start",
    "lg-end",
    "lg-center",
    "lg-between",
    "lg-around",
    "xl-start",
    "xl-end",
    "xl-center",
    "xl-between",
    "xl-around",
];

export const alignItems = createDictionary(alignments.map((value) => [value, b.styleDef(`align-items-${value}`)]));
export const alignSelf = createDictionary(alignments.map((value) => [value, b.styleDef(`align-self-${value}`)]));
export const justifyContent = createDictionary(alignments.map((value) => [value, b.styleDef(`justify-content-${value}`)]));

export type VerticalAlignment = "baseline" | "top" | "middle" | "bottom" | "text-bottom" | "text-top";
const verticalAlignments = ["baseline", "top", "middle", "bottom", "text-bottom", "text-top"];

export const align = createDictionary(verticalAlignments.map((value) => [value, b.styleDef(`align-${value}`)]));
