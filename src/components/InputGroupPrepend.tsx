import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const inputGroupPrependStyles = {
    inputGroupPrepend: b.styleDef("input-group-prepend"),
};

export interface IInputGroupPrependData extends IBaseElementDataWithChildren {}

export class InputGroupPrepend extends BaseElement<IInputGroupPrependData> {
    static id: string = "bobrilstrap-input-group-prepend";
    componentProperties = (): (keyof IInputGroupPrependData)[] => [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [inputGroupPrependStyles.inputGroupPrepend];
    }
}
