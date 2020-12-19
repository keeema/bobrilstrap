import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";

export type SpacingType = "m" | "p";
export type Side = "t" | "b" | "s" | "e" | "x" | "y" | "";
export type SpacingSize = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | "auto";

const spacingTypes: SpacingType[] = ["m", "p"];
const sides: Side[] = ["t", "b", "s", "e", "x", "y", ""];
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

export function margin(side: Side, size: SpacingSize, breakpoint?: Breakpoint): b.IBobrilStyle;
export function margin(size: SpacingSize, breakpoint?: Breakpoint): b.IBobrilStyle;
export function margin(definition: ISpacing): b.IBobrilStyle;
export function margin(
    definitionOrSizeOrSide: ISpacing | SpacingSize | Side,
    sizeOrBreakpoint?: SpacingSize | Breakpoint,
    breakpoint?: Breakpoint
): b.IBobrilStyle {
    return spacing("m", definitionOrSizeOrSide, sizeOrBreakpoint, breakpoint);
}

export function padding(side: Side, size: SpacingSize, breakpoint?: Breakpoint): b.IBobrilStyle;
export function padding(size: SpacingSize, breakpoint?: Breakpoint): b.IBobrilStyle;
export function padding(definition: ISpacing): b.IBobrilStyle;
export function padding(
    definitionOrSizeOrSide: ISpacing | SpacingSize | Side,
    sizeOrBreakpoint?: SpacingSize | Breakpoint,
    breakpoint?: Breakpoint
): b.IBobrilStyle {
    return spacing("p", definitionOrSizeOrSide, sizeOrBreakpoint, breakpoint);
}

export function spacing(
    spacingType: SpacingType,
    definitionOrSizeOrSide: ISpacing | SpacingSize | Side,
    sizeOrBreakpoint?: SpacingSize | Breakpoint,
    breakpoint?: Breakpoint
): b.IBobrilStyle {
    const fullDef = isSpacingDefinition(definitionOrSizeOrSide)
        ? definitionOrSizeOrSide
        : convertToSpaceDefinition(definitionOrSizeOrSide, sizeOrBreakpoint, breakpoint);
    return fullDef.breakpoint
        ? spacingOnBreakpoints(spacingType)(fullDef.side ?? "")(fullDef.breakpoint)(fullDef.size)
        : spacings(spacingType)(fullDef.side ?? "")(fullDef.size);
}

function isSpacingDefinition(definition: ISpacing | SpacingSize | Side): definition is ISpacing {
    return typeof definition === "object" && definition.size !== undefined;
}

export type GapSize = 0 | 1 | 2 | 3 | 4 | 5 | "auto";

const gapSizes: GapSize[] = [0, 1, 2, 3, 4, 5, "auto"];

export const gap = createFilledDictionary(gapSizes.map((size) => [size, b.styleDef(`gap-${size}`)]));

function convertToSpaceDefinition(
    sizeOrSide: SpacingSize | Side,
    sizeOrBreakpoint?: SpacingSize | Breakpoint,
    breakpoint?: Breakpoint
): ISpacing {
    return typeof sizeOrSide === "string" && sizeOrSide !== "auto"
        ? {
              side: sizeOrSide as Side,
              size: sizeOrBreakpoint as SpacingSize,
              breakpoint: breakpoint,
          }
        : {
              size: sizeOrSide as SpacingSize,
              breakpoint: sizeOrBreakpoint as Breakpoint,
          };
}
