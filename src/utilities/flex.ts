import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type FlexFill = "fill";
export type Flex = FlexWrap | FlexDirection | FlexFill;
export type FlexGrowShrink = "grow" | "shrink";
export type FlexGrowShrinkValue = 0 | 1;

const flexScale: Flex[] = ["nowrap", "wrap", "wrap-reverse", "row", "row-reverse", "column", "column-reverse", "fill"];
const flexGrowShrinkScale: FlexGrowShrink[] = ["grow", "shrink"];
const flexGrowShrinkValueScale: FlexGrowShrinkValue[] = [0, 1];

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

export function flex(flexValue: Flex, breakpoint?: Breakpoint): b.IBobrilStyle;
export function flex(flexGrowShring: FlexGrowShrink, value: FlexGrowShrinkValue, breakpoint?: Breakpoint): b.IBobrilStyle;
export function flex(
    flexOrGrowShrink: Flex | FlexGrowShrink,
    breakpointOrValue?: Breakpoint | FlexGrowShrinkValue,
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
