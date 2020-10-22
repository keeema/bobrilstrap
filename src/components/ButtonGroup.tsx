import * as b from "bobril";
import { createFilledDictionary } from "../../helpers/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementData, BaseElement } from "./BaseElement";

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

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [buttonGroupStyles.buttonGroup, this.data.size && buttonGroupStyles.sizes(this.data.size)];
    }
}
