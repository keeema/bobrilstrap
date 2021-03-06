import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type Display = "none" | "inline" | "inline-block" | "block" | "grid" | "table" | "table-cell" | "table-row" | "flex" | "inline-flex";
const displays: Display[] = ["none", "inline", "inline-block", "block", "grid", "table", "table-cell", "table-row", "flex", "inline-flex"];

const displaysOnAll = createFilledDictionary(displays.map((orderValue) => [orderValue, b.styleDef(`d-${orderValue}`)]));

const displaysOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(displays.map((orderNo) => [orderNo, b.styleDef(`d-${breakpoint}-${orderNo}`)])),
    ])
);

export function display(orderNo: Display, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? displaysOnBreakpoint(breakpoint)(orderNo) : displaysOnAll(orderNo);
}

export const displayPrint = createFilledDictionary(displays.map((orderValue) => [orderValue, b.styleDef(`d-print-${orderValue}`)]));
