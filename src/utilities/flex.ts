import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type Flex = "nowrap" | "wrap" | "wrap-reverse" | "row" | "row-revers" | "column" | "column-reverse" | "fill";
const flexScale: Flex[] = ["nowrap", "wrap", "wrap-reverse", "row", "row-revers", "column", "column-reverse", "fill"];

export const flexOnAll = createFilledDictionary(flexScale.map((flexValue) => [flexValue, b.styleDef(`flex-${flexValue}`)]));

export const flexOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(flexScale.map((flexValue) => [flexValue, b.styleDef(`flex-${breakpoint}-${flexValue}`)])),
    ])
);

export function flex(flex: Flex, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? flexOnBreakpoint(breakpoint)(flex) : flexOnAll(flex);
}
