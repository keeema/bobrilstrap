import * as b from "bobril";
import { createFilledDictionary } from "./dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type Order = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
const orderScale: Order[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const ordersOnAll = createFilledDictionary(orderScale.map((order) => [order, b.styleDef(`order-${order}`)]));

export const ordersOnBreakpoint = createFilledDictionary(
    breakpoints.map((breakpoint) => [
        breakpoint,
        createFilledDictionary(orderScale.map((orderNo) => [orderNo, b.styleDef(`order-${breakpoint}-${orderNo}`)])),
    ])
);

export function order(orderNo: Order, breakpoint?: Breakpoint): b.IBobrilStyle {
    return breakpoint ? ordersOnBreakpoint(breakpoint)(orderNo) : ordersOnAll(orderNo);
}
