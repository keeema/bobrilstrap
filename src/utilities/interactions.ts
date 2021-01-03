import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type UserSelect = "all" | "auto" | "none";
const userSelects: UserSelect[] = ["all", "auto", "none"];

export const userSelect = createFilledDictionary(userSelects.map((value) => [value, b.styleDef(`user-select-${value}`)]));

export type PointerEvents = "auto" | "none";
const pointerEventsScale: PointerEvents[] = ["auto", "none"];

export const pointerEvents = createFilledDictionary(pointerEventsScale.map((value) => [value, b.styleDef(`pe-${value}`)]));
