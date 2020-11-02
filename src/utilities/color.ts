import * as b from "bobril";
import { createDictionary } from "../../helpers/dict";

export type BackgroundGradientColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export type Color = BackgroundGradientColor | "muted" | "white";
export type BackgroundColor = BackgroundGradientColor | "white" | "transparent";

export const backgroundGradientColorScale: BackgroundGradientColor[] = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];

export const backgroundColorScale: BackgroundColor[] = [...backgroundGradientColorScale, "white", "transparent"];

export const textColorScale: Color[] = [...backgroundGradientColorScale, "muted", "white"];

export const textColor = createDictionary<Color, b.IBobrilStyle>(textColorScale.map((variant) => [variant, b.styleDef(`text-${variant}`)]));

export const backgroundColor = createDictionary<BackgroundColor, b.IBobrilStyle>(
    backgroundColorScale.map((variant) => [variant, b.styleDef(`bg-${variant}`)])
);

export const backgroundGradientColor = createDictionary<Color, b.IBobrilStyle>(
    backgroundGradientColorScale.map((variant) => [variant, b.styleDef(`bg-gradient-${variant}`)])
);

export type BorderColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "white";
export const borderColorScale: BorderColor[] = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white"];
export const borderColor = createDictionary<BorderColor, b.IBobrilStyle>(
    borderColorScale.map((variant) => [variant, b.styleDef(`border-${variant}`)])
);
