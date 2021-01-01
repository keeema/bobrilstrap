import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type BorderPlacement = "top" | "end" | "start" | "bottom";
export type BorderWidth = 0 | 1 | 2 | 3 | 4 | 5;
export const borderPlacements: BorderPlacement[] = ["top", "end", "start", "bottom"];
export const borderWidths: BorderWidth[] = [0, 1, 2, 3, 4, 5];

const bordersWithValues = createFilledDictionary(
    [undefined, ...borderPlacements].map((placement) => [
        placement,
        placement === undefined
            ? createFilledDictionary(
                  [undefined, ...borderWidths].map((value) => [
                      value,
                      value === undefined ? b.styleDef(`border`) : b.styleDef(`border-${value}`),
                  ])
              )
            : createFilledDictionary(
                  [undefined, ...borderWidths].map((value) => [
                      value,
                      value === undefined ? b.styleDef(`border-${placement}`) : b.styleDef(`border-${placement}-${value}`),
                  ])
              ),
    ])
);

export function border(width?: BorderWidth): b.IBobrilStyle[];
export function border(placement: BorderPlacement, value?: BorderWidth): b.IBobrilStyle[];
export function border(widthOrPlacement?: BorderPlacement | BorderWidth, width?: BorderWidth): b.IBobrilStyle[] {
    return typeof widthOrPlacement === "string"
        ? [width !== undefined && bordersWithValues(widthOrPlacement)(undefined), bordersWithValues(widthOrPlacement)(width)]
        : [widthOrPlacement !== undefined && bordersWithValues(undefined)(undefined), bordersWithValues(undefined)(widthOrPlacement)];
}

export type Rounded = "top" | "end" | "start" | "bottom" | "circle" | "pill" | 0 | 1 | 2 | 3;
export const roundedScale: Rounded[] = ["top", "end", "start", "bottom", "circle", "pill", 0, 1, 2, 3];

const roundedStyles = createFilledDictionary(
    [undefined, ...roundedScale].map((value) => [value, value === undefined ? b.styleDef(`rounded`) : b.styleDef(`rounded-${value}`)])
);

export function rounded(value?: Rounded): b.IBobrilStyle {
    return roundedStyles(value);
}
