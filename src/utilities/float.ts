import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type Float = "start" | "none" | "end";
const floats: Float[] = ["start", "none", "end"];

const floatsAll = createFilledDictionary(floats.map((value) => [value, b.styleDef(`float-${value}`)]));

const floatsOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(floats.map((value) => [value, b.styleDef(`float-${breakpoint}-${value}`)])),
    ])
);

export function float(floatValue: Float, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? floatsOnBreakpoint(breakpoint)(floatValue) : floatsAll(floatValue);
}
