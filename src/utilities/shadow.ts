import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type Shadow = "none" | "sm" | "lg";

const shadows: Shadow[] = ["none", "sm", "lg"];

const shadowValue = createFilledDictionary(
    [undefined, ...shadows].map((value) => [value, value === undefined ? b.styleDef("shadow") : b.styleDef(`shadow-${value}`)])
);

export function shadow(value?: Shadow): b.IBobrilStyle {
    return shadowValue(value);
}
