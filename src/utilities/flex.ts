import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type Flex = "nowrap" | "wrap" | "wrap-reverse" | "row" | "row-revers" | "column" | "column-reverse" | "fill";
export type FlexGrowShrink = "grow" | "shrink";
export type FlexGrowShringValue = 0 | 1;

const flexScale: Flex[] = ["nowrap", "wrap", "wrap-reverse", "row", "row-revers", "column", "column-reverse", "fill"];
const flexGrowShrinkScale: FlexGrowShrink[] = ["grow", "shrink"];
const flexGrowShrinkValueScale: FlexGrowShringValue[] = [0, 1];

const flexOnAll = createFilledDictionary(flexScale.map((flexValue) => [flexValue, b.styleDef(`flex-${flexValue}`)]));
const flexGrowShringOnAll = createFilledDictionary(
    flexGrowShrinkScale.map((flexValue) => [
        flexValue,
        createFilledDictionary(
            flexGrowShrinkValueScale.map((flexGrowShringValue) => [
                flexGrowShringValue,
                b.styleDef(`flex-${flexValue}-${flexGrowShringValue}`),
            ])
        ),
    ])
);

const flexOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(flexScale.map((flexValue) => [flexValue, b.styleDef(`flex-${breakpoint}-${flexValue}`)])),
    ])
);

const flexGrowShringOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(
            flexGrowShrinkScale.map((flexValue) => [
                flexValue,
                createFilledDictionary(
                    flexGrowShrinkValueScale.map((flexGrowShringValue) => [
                        flexGrowShringValue,
                        b.styleDef(`flex-${flexValue}-${breakpoint}-${flexGrowShringValue}`),
                    ])
                ),
            ])
        ),
    ])
);

export function flex(flexGrowShring: FlexGrowShrink, value: FlexGrowShringValue, breakpoint?: Breakpoint): b.IBobrilStyle;
export function flex(flex: Flex, breakpoint?: Breakpoint): b.IBobrilStyle;
export function flex(
    flexOrGrowShrink: Flex | FlexGrowShrink,
    breakpointOrValue?: Breakpoint | FlexGrowShringValue,
    breakpoint?: Breakpoint
): b.IBobrilStyle {
    if (typeof breakpointOrValue === "number") {
        return breakpoint
            ? flexGrowShringOnBreakpoint(breakpoint)(flexOrGrowShrink as FlexGrowShrink)(breakpointOrValue)
            : flexGrowShringOnAll(flexOrGrowShrink as FlexGrowShrink)(breakpointOrValue);
    }
    return breakpointOrValue
        ? flexOnBreakpoint(breakpointOrValue as Breakpoint)(flexOrGrowShrink as Flex)
        : flexOnAll(flexOrGrowShrink as Flex);
}
