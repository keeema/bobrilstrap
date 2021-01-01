import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";

export type Ratio = "1x1" | "4x3" | "16x9" | "21x9";
export const ratioScale: Ratio[] = ["1x1", "4x3", "16x9", "21x9"];

const ratioStyle = b.styleDef("ratio");
const ratioOnAll = createFilledDictionary(ratioScale.map((ratioValue) => [ratioValue, b.styleDef(`ratio-${ratioValue}`)]));

export function ratio(): b.IBobrilStyle;
export function ratio(ratioValue: Ratio): b.IBobrilStyle[];
export function ratio(ratioValue?: Ratio): b.IBobrilStyle | b.IBobrilStyleArray {
    return ratioValue === undefined ? ratioStyle : [ratioStyle, ratioOnAll(ratioValue)];
}
