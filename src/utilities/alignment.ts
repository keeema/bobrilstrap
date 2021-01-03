import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { breakpoints, Breakpoint } from "../layouts/breakpoint";

export type Alignment = "start" | "center" | "end" | "baseline" | "stretch";

const alignments: Alignment[] = ["start", "center", "end", "baseline", "stretch"];

const alignsItems = createFilledDictionary(alignments.map((value) => [value, b.styleDef(`align-items-${value}`)]));
const alignsItemsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(alignments.map((value) => [value, b.styleDef(`align-items-${breakpoint}-${value}`)])),
    ])
);

export function alignItems(alignment: Alignment, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? alignsItemsOnBreakpoint(breakpoint)(alignment as Alignment) : alignsItems(alignment);
}

const alignSelfs = createFilledDictionary(alignments.map((value) => [value, b.styleDef(`align-self-${value}`)]));
const alignSelfsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(alignments.map((value) => [value, b.styleDef(`align-self-${breakpoint}-${value}`)])),
    ])
);

export function alignSelf(alignment: Alignment, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? alignSelfsOnBreakpoint(breakpoint)(alignment as Alignment) : alignSelfs(alignment);
}

export type JustifyContentAlignment = "start" | "center" | "end" | "between" | "around" | "evenly";
const justifyContentAlignments: JustifyContentAlignment[] = ["start", "center", "end", "between", "around", "evenly"];

const justifyContents = createFilledDictionary(justifyContentAlignments.map((value) => [value, b.styleDef(`justify-content-${value}`)]));
const justifyContentsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(justifyContentAlignments.map((value) => [value, b.styleDef(`justify-content-${breakpoint}-${value}`)])),
    ])
);

export function justifyContent(alignment: JustifyContentAlignment, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? justifyContentsOnBreakpoint(breakpoint)(alignment) : justifyContents(alignment);
}

export type ContentAlignment = "start" | "center" | "end" | "between" | "around" | "stretch";
const contentAlignments: ContentAlignment[] = ["start", "center", "end", "between", "around", "stretch"];

const alignContents = createFilledDictionary(contentAlignments.map((value) => [value, b.styleDef(`align-content-${value}`)]));
const alignContentsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(contentAlignments.map((value) => [value, b.styleDef(`align-content-${breakpoint}-${value}`)])),
    ])
);

export function alignContent(alignment: ContentAlignment, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? alignContentsOnBreakpoint(breakpoint)(alignment) : alignContents(alignment);
}

export type VerticalAlignment = "baseline" | "top" | "middle" | "bottom" | "text-bottom" | "text-top";
export const verticalAlignments: VerticalAlignment[] = ["baseline", "top", "middle", "bottom", "text-bottom", "text-top"];

export const align = createFilledDictionary(verticalAlignments.map((value) => [value, b.styleDef(`align-${value}`)]));
