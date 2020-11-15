import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export const buttonToolbarStyles = {
    buttonToolbar: b.styleDef("btn-toolbar"),
};

export interface IButtonToolbarData extends IBaseElementDataWithChildren {}

export class ButtonToolbar extends BaseElement<IButtonToolbarData> {
    static id: string = "bobrilstrap-button-toolbar";
    componentProperties = (): (keyof IButtonToolbarData)[] => [];

    componentAdditionalAttributes(): IAllAttrs {
        return { ...super.componentAdditionalAttributes(), role: this.data.role || "toolbar" };
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [buttonToolbarStyles.buttonToolbar];
    }
}
