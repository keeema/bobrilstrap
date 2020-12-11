import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type GutterSize = 0 | 1 | 2 | 3 | 4 | 5;

const gutterSizes: GutterSize[] = [0, 1, 2, 3, 4, 5];

const gutterAll = createFilledDictionary(gutterSizes.map((size) => [size, b.styleDef(`g-${size}`)]));
const gutterAllX = createFilledDictionary(gutterSizes.map((size) => [size, b.styleDef(`gx-${size}`)]));
const gutterAllY = createFilledDictionary(gutterSizes.map((size) => [size, b.styleDef(`gy-${size}`)]));

const gutterBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(gutterSizes.map((size) => [size, b.styleDef(`g-${breakpoint}-${size}`)])),
    ])
);
const gutterBreakpointX = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(gutterSizes.map((size) => [size, b.styleDef(`gx-${breakpoint}-${size}`)])),
    ])
);
const gutterBreakpointY = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(gutterSizes.map((size) => [size, b.styleDef(`gy-${breakpoint}-${size}`)])),
    ])
);

export function gutter(size: GutterSize, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? gutterBreakpoint(breakpoint)(size) : gutterAll(size);
}
export function gutterX(size: GutterSize, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? gutterBreakpointX(breakpoint)(size) : gutterAllX(size);
}

export function gutterY(size: GutterSize, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? gutterBreakpointY(breakpoint)(size) : gutterAllY(size);
}
