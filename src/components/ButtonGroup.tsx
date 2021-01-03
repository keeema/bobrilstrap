import * as b from "bobril";
import { createFilledDictionary } from "../../utils/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export const buttonGroupStyles = {
    buttonGroup: b.styleDef("btn-group"),
    buttonGroupVertical: b.styleDef("btn-group-vertical"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`btn-group-${breakpoint}`)])),
};

export interface IButtonGroupData extends IBaseElementDataWithChildren {
    size?: Breakpoint;
    vertical?: boolean;
}

export class ButtonGroup<TData extends IButtonGroupData> extends BaseElement<TData> {
    static id: string = "bobrilstrap-button-group";

    componentProperties(): (keyof TData)[] {
        return ["size", "vertical"];
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { ...super.componentAdditionalAttributes(), role: this.data.role || "group" };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            this.data.vertical ? buttonGroupStyles.buttonGroupVertical : buttonGroupStyles.buttonGroup,
            this.data.size && buttonGroupStyles.sizes(this.data.size),
        ];
    }
}
