import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type Flex = "nowrap" | "wrap" | "wrap-revers";
const flexScale: Flex[] = ["nowrap", "wrap", "wrap-revers"];

export const flexOnAll = createFilledDictionary(flexScale.map((orderValue) => [orderValue, b.styleDef(`flex-${orderValue}`)]));

export const flexOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(flexScale.map((orderNo) => [orderNo, b.styleDef(`flex-${breakpoint}-${orderNo}`)])),
    ])
);

export function flex(flex: Flex, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? flexOnBreakpoint(breakpoint)(flex) : flexOnAll(flex);
}
