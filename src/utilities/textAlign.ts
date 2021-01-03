import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type TextAlign = "start" | "center" | "end";
const textAligns: TextAlign[] = ["start", "center", "end"];

export const alignsAll = createFilledDictionary(textAligns.map((align) => [align, b.styleDef(`text-${align}`)]));

export const alignsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(textAligns.map((align) => [align, b.styleDef(`text-${breakpoint}-${align}`)])),
    ])
);

export function textAlign(align: TextAlign, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? alignsOnBreakpoint(breakpoint)(align as TextAlign) : alignsAll(align);
}
