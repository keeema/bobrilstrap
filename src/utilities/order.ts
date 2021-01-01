import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type Order = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "first" | "last";
const orderScale: Order[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "first", "last"];

const ordersOnAll = createFilledDictionary(orderScale.map((orderValue) => [orderValue, b.styleDef(`order-${orderValue}`)]));

const ordersOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(orderScale.map((orderNo) => [orderNo, b.styleDef(`order-${breakpoint}-${orderNo}`)])),
    ])
);

export function order(orderNo: Order, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? ordersOnBreakpoint(breakpoint)(orderNo) : ordersOnAll(orderNo);
}
