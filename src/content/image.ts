import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type ImageUtils = "fluid" | "figure" | "thumbnail";
export const imageUtils: ImageUtils[] = ["fluid", "figure", "thumbnail"];

export const image = createFilledDictionary(
    imageUtils.map((val) => [val, val === "figure" ? b.styleDef("figure-img") : b.styleDef(`img-${val}`)])
);
