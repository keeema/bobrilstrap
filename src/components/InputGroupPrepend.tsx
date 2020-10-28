import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const inputGroupPrependStyles = {
    inputGroupPrepend: b.styleDef("input-group-prepend"),
};

export interface IInputGroupPrependData extends IBaseElementData {}

export class InputGroupPrepend extends BaseElement<IInputGroupPrependData> {
    static id: string = "bobrilstrap-input-group-prepend";
    readonly componentProperties: (keyof IInputGroupPrependData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [inputGroupPrependStyles.inputGroupPrepend];
    }
}
