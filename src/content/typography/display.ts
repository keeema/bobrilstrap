import * as b from "bobril";
import { createFilledDictionary } from "../../../utils/dict";

export type DisplayHeadingSize = 1 | 2 | 3 | 4 | 5 | 6;

export const displayHeading = createFilledDictionary(
    [1, 2, 3, 4, 5, 6].map((val) => [val as DisplayHeadingSize, b.styleDef(`display-${val}`)])
);

export const heading = createFilledDictionary([1, 2, 3, 4, 5, 6].map((val) => [val as DisplayHeadingSize, b.styleDef(`h${val}`)]));
