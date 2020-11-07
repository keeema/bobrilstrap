import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const inputGroupAppendStyles = {
    inputGroupAppend: b.styleDef("input-group-append"),
};

export interface IInputGroupAppendData extends IBaseElementDataWithChildren {}

export class InputGroupAppend extends BaseElement<IInputGroupAppendData> {
    static id: string = "bobrilstrap-input-group-append";
    readonly componentProperties: (keyof IInputGroupAppendData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [inputGroupAppendStyles.inputGroupAppend];
    }
}
