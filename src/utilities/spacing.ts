import * as b from "bobril";
import { createFilledDictionary } from "../../helpers/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type SpacingType = "m" | "p";
export type Side = "t" | "b" | "l" | "r" | "x" | "y" | "";
export type SpacingSize = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | "auto";

const spacingTypes: SpacingType[] = ["m", "p"];
const sides: Side[] = ["t", "b", "l", "r", "x", "y", ""];
const spacingSizes: SpacingSize[] = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, "auto"];

const spacings = createFilledDictionary(
    spacingTypes.map((spacingType) => [
        spacingType,
        createFilledDictionary(
            sides.map((side) => [
                side,
                createFilledDictionary(
                    spacingSizes.map((size) => [
                        size,
                        b.styleDef(`${spacingType}${side}-${size === "auto" || size >= 0 ? size : `n${Math.abs(size)}`}`),
                    ])
                ),
            ])
        ),
    ])
);

export const spacingOnBreakpoints = createFilledDictionary(
    spacingTypes.map((spacingType) => [
        spacingType,
        createFilledDictionary(
            sides.map((side) => [
                side,
                createFilledDictionary(
                    breakpoints.map((breakpoint) => [
                        breakpoint,
                        createFilledDictionary(
                            spacingSizes.map((size) => [
                                size,
                                b.styleDef(
                                    `${spacingType}${side}-${breakpoint}-${size === "auto" || size >= 0 ? size : `n${Math.abs(size)}`}`
                                ),
                            ])
                        ),
                    ])
                ),
            ])
        ),
    ])
);

export interface ISpacing {
    size: SpacingSize;
    breakpoint?: Breakpoint;
    side?: Side;
}

export function margin(definition: ISpacing | SpacingSize): b.IBobrilStyle {
    return spacing("m", definition);
}

export function padding(definition: ISpacing | SpacingSize): b.IBobrilStyle {
    return spacing("p", definition);
}

export function spacing(spacingType: SpacingType, definition: ISpacing | SpacingSize): b.IBobrilStyle {
    const fullDef = isSpacingDefinition(definition) ? definition : { size: definition };
    return fullDef.breakpoint
        ? spacingOnBreakpoints(spacingType)(fullDef.side ?? "")(fullDef.breakpoint)(fullDef.size)
        : spacings(spacingType)(fullDef.side ?? "")(fullDef.size);
}

function isSpacingDefinition(definition: ISpacing | SpacingSize): definition is ISpacing {
    return typeof definition === "object" && definition.size !== undefined;
}
