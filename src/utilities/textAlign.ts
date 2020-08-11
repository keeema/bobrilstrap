import * as b from "bobril";
import { createFilledDictionary } from "./dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type TextAlign = "left" | "center" | "right";
export type TextJustify = "justify";
export type TextAlignOrJustify = TextAlign | TextJustify;
const textAligns: TextAlign[] = ["left", "center", "right"];
const textAlignsOrJustifies: TextAlignOrJustify[] = [...textAligns, "justify"];

export const alignsAll = createFilledDictionary(textAlignsOrJustifies.map((align) => [align, b.styleDef(`text-${align}`)]));

export const alignsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(textAligns.map((align) => [align, b.styleDef(`text-${breakpoint}-${align}`)])),
    ])
);

export function textAlign(align: TextAlignOrJustify): b.IBobrilStyle;
export function textAlign(align: TextAlign, breakpoint: Breakpoint): b.IBobrilStyle;
export function textAlign(align: TextAlign | TextAlignOrJustify, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? alignsOnBreakpoint(breakpoint)(align as TextAlign) : alignsAll(align);
}
