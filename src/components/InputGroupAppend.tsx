import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const inputGroupAppendStyles = {
    inputGroupAppend: b.styleDef("input-group-append"),
};

export interface IInputGroupAppendData extends IBaseElementData {}

export class InputGroupAppend extends BaseElement<IInputGroupAppendData> {
    static id: string = "bobrilstrap-input-group-append";
    readonly componentProperties: (keyof IInputGroupAppendData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [inputGroupAppendStyles.inputGroupAppend];
    }
}
