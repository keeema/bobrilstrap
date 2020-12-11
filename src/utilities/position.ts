import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

const positions: Position[] = ["static", "relative", "absolute", "fixed", "sticky"];

export const position = createFilledDictionary(positions.map((value) => [value, b.styleDef(`position-${value}`)]));
