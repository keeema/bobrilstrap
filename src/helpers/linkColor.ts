import * as b from "bobril";
import { createDictionary } from "../../utils/dict";
import { BackgroundGradientColor, backgroundGradientColorScale } from "../utilities/color";

export type LinkColor = BackgroundGradientColor;

export const linkColorScale: LinkColor[] = backgroundGradientColorScale;

export const linkColor = createDictionary<LinkColor, b.IBobrilStyle>(
    linkColorScale.map((variant) => [variant, b.styleDef(`link-${variant}`)])
);
