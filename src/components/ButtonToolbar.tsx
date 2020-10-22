import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const buttonToolbarStyles = {
    buttonToolbar: b.styleDef("btn-toolbar"),
};

export interface IButtonToolbarData extends IBaseElementData {}

export class ButtonToolbar extends BaseElement<IButtonToolbarData> {
    static id: string = "bobrilstrap-button-toolbar";
    readonly componentProperties: (keyof IButtonToolbarData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [buttonToolbarStyles.buttonToolbar];
    }
}
