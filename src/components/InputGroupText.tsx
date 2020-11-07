import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const inputGroupTextStyles = {
    inputGroupText: b.styleDef("input-group-text"),
};

export interface IInputGroupTextData extends IBaseElementDataWithChildren {}

export class InputGroupText extends BaseElement<IInputGroupTextData> {
    static id: string = "bobrilstrap-input-group-text";
    readonly componentProperties: (keyof IInputGroupTextData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [inputGroupTextStyles.inputGroupText];
    }
}
