import * as b from "bobril";
import { createFilledDictionary } from "../../helpers/dict";

export type Font = "bold" | "bolder" | "normal" | "light" | "lighter" | "italic";
const fonts: Font[] = ["bold", "bolder", "normal", "light", "lighter", "italic"];

export const font = createFilledDictionary(
    fonts.map((value) => [value, value === "italic" ? b.styleDef("font-italic") : b.styleDef(`font-weight-${value}`)])
);
