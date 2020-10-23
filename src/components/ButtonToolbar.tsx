import * as b from "bobril";
import { IBaseElementData, BaseElement, IAllAttrs } from "./BaseElement";

export const buttonToolbarStyles = {
    buttonToolbar: b.styleDef("btn-toolbar"),
};

export interface IButtonToolbarData extends IBaseElementData {}

export class ButtonToolbar extends BaseElement<IButtonToolbarData> {
    static id: string = "bobrilstrap-button-toolbar";
    readonly componentProperties: (keyof IButtonToolbarData)[] = [];

    get componentAdditionalAttributes(): IAllAttrs {
        return { role: this.data.role || "toolbar" };
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [buttonToolbarStyles.buttonToolbar];
    }
}
