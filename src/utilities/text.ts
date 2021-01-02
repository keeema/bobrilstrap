import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type Text = "wrap" | "nowrap" | "break" | "lowercase" | "uppercase" | "capitalize" | "reset";
export type TextDecoration = "underline" | "line-through" | "none";

const texts: Text[] = ["wrap", "nowrap", "break", "lowercase", "uppercase", "capitalize", "reset"];
const textDecorations: TextDecoration[] = ["underline", "line-through", "none"];

export const text = createFilledDictionary(texts.map((value) => [value, b.styleDef(`text-${value}`)]));
export const textDecoration = createFilledDictionary(textDecorations.map((value) => [value, b.styleDef(`text-decoration-${value}`)]));
