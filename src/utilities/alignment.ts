import * as b from "bobril";
import { createDictionary, createFilledDictionary } from "../../utils/dict";
import { breakpoints, Breakpoint } from "../layouts/breakpoint";

export type Alignment = "start" | "center" | "end" | "baseline" | "stretch";

const alignments: Alignment[] = ["start", "center", "end", "baseline", "stretch"];

const alignsItems = createDictionary(alignments.map((value) => [value, b.styleDef(`align-items-${value}`)]));
const alignsItemsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(alignments.map((value) => [value, b.styleDef(`align-items-${breakpoint}-${value}`)])),
    ])
);

export function alignItems(alignment: Alignment, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? alignsItemsOnBreakpoint(breakpoint)(alignment as Alignment) : alignsItems(alignment);
}

const alignSelfs = createDictionary(alignments.map((value) => [value, b.styleDef(`align-self-${value}`)]));
const alignSelfsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(alignments.map((value) => [value, b.styleDef(`align-self-${breakpoint}-${value}`)])),
    ])
);

export function alignSelf(alignment: Alignment, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? alignSelfsOnBreakpoint(breakpoint)(alignment as Alignment) : alignSelfs(alignment);
}

export type ContentAlignment = "start" | "center" | "end" | "between" | "around" | "evenly";

const contentAlignments: ContentAlignment[] = ["start", "center", "end", "between", "around", "evenly"];

const justifyContents = createDictionary(contentAlignments.map((value) => [value, b.styleDef(`justify-content-${value}`)]));
const justifyContentsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(contentAlignments.map((value) => [value, b.styleDef(`justify-content-${breakpoint}-${value}`)])),
    ])
);

export function justifyContent(alignment: ContentAlignment, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? justifyContentsOnBreakpoint(breakpoint)(alignment) : justifyContents(alignment);
}

export type VerticalAlignment = "baseline" | "top" | "middle" | "bottom" | "text-bottom" | "text-top";
const verticalAlignments: VerticalAlignment[] = ["baseline", "top", "middle", "bottom", "text-bottom", "text-top"];

export const align = createDictionary(verticalAlignments.map((value) => [value, b.styleDef(`align-${value}`)]));
