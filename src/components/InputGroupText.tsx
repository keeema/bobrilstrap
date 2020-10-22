import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const inputGroupTextStyles = {
    inputGroupText: b.styleDef("input-group-text"),
};

export interface IInputGroupTextData extends IBaseElementData {}

export class InputGroupText extends BaseElement<IInputGroupTextData> {
    static id: string = "bobrilstrap-input-group-text";
    readonly componentProperties: (keyof IInputGroupTextData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [inputGroupTextStyles.inputGroupText];
    }
}
