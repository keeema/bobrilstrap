import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type PositionHelper = "static" | "relative" | "absolute" | "fixed" | "sticky";

const positionHelpers: PositionHelper[] = ["static", "relative", "absolute", "fixed", "sticky"];
const positionHelper = createFilledDictionary(positionHelpers.map((value) => [value, b.styleDef(`position-${value}`)]));

export type PositionUtilityStickyTop = "sticky-top";
export type PositionUtility = "fixed-top" | "fixed-bottom" | PositionUtilityStickyTop;

const positionUtilities: PositionUtility[] = ["fixed-top", "fixed-bottom", "sticky-top"];
const positionUtility = createFilledDictionary(positionUtilities.map((value) => [value, b.styleDef(`${value}`)]));
const stickyTops = createFilledDictionary(breakpoints.map((value) => [value, b.styleDef(`sticky-${value}-top`)]));

export function position(value: PositionUtility): b.IBobrilStyle;
export function position(value: PositionHelper): b.IBobrilStyle;
export function position(value: PositionUtilityStickyTop, breakpoint: Breakpoint): b.IBobrilStyle;
export function position(value: PositionUtilityStickyTop | PositionHelper | PositionUtility, breakpoint?: Breakpoint): b.IBobrilStyle {
    if (breakpoint !== undefined) {
        return stickyTops(breakpoint);
    }

    return isPositionHelper(value) ? positionHelper(value) : positionUtility(value);
}

function isPositionHelper(value: PositionUtility | PositionHelper): value is PositionHelper {
    return positionHelpers.indexOf(value as PositionHelper) >= 0;
}

export type PositionValue = 0 | 50 | 100;
const positionValues: PositionValue[] = [0, 50, 100];

export const top = createFilledDictionary(positionValues.map((value) => [value, b.styleDef(`top-${value}`)]));
export const start = createFilledDictionary(positionValues.map((value) => [value, b.styleDef(`start-${value}`)]));
export const bottom = createFilledDictionary(positionValues.map((value) => [value, b.styleDef(`bottom-${value}`)]));
export const end = createFilledDictionary(positionValues.map((value) => [value, b.styleDef(`end-${value}`)]));
