import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type Overflow = "auto" | "hidden" | "visible" | "scroll";

const overflows: Overflow[] = ["auto", "hidden", "visible", "scroll"];

export const overflow = createFilledDictionary(overflows.map((value) => [value, b.styleDef(`overflow-${value}`)]));
