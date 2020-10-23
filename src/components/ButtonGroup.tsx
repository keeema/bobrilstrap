import * as b from "bobril";
import { createFilledDictionary } from "../../helpers/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementData, BaseElement, IAllAttrs } from "./BaseElement";

export const buttonGroupStyles = {
    buttonGroup: b.styleDef("btn-group"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`btn-group-${breakpoint}`)])),
};

export interface IButtonGroupData extends IBaseElementData {
    size?: Breakpoint;
}

export class ButtonGroup extends BaseElement<IButtonGroupData> {
    static id: string = "bobrilstrap-button-group";

    readonly componentProperties: (keyof IButtonGroupData)[] = ["size"];

    get componentAdditionalAttributes(): IAllAttrs {
        return { role: this.data.role || "group" };
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [buttonGroupStyles.buttonGroup, this.data.size && buttonGroupStyles.sizes(this.data.size)];
    }
}
