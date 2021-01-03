import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { Color, textColor } from "../utilities/color";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export type SpinnerAnimation = "border" | "grow";
export type SpinnerVariant = Color;

export const spinnerStyles = {
    border: b.styleDef("spinner-border"),
    grow: b.styleDef("spinner-grow"),
    sizes: {
        border: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`spinner-border-${breakpoint}`)])),
        grow: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`spinner-grow-${breakpoint}`)])),
    },
};

export interface ISpinnerData extends IBaseElementDataWithChildren {
    animation?: SpinnerAnimation;
    variant?: SpinnerVariant;
    size?: Breakpoint;
}

export class Spinner extends BaseElement<ISpinnerData> {
    static id: string = "bobrilstrap-spinner";

    componentProperties(): (keyof ISpinnerData)[] {
        return ["animation", "variant", "size"];
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            role: this.data.role ?? "status",
        };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            spinnerStyles[this.data.animation ?? "border"],
            this.data.variant && textColor(this.data.variant),
            this.data.size && spinnerStyles.sizes[this.data.animation ?? "border"](this.data.size),
        ];
    }
}
