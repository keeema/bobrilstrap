import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const formGroupStyles = {
    formGroup: b.styleDef("form-group"),
};

export interface IFormGroupData extends IBaseElementData {}

export class FormGroup extends BaseElement<IFormGroupData> {
    static id: string = "bobrilstrap-form-group";
    readonly componentProperties: (keyof IFormGroupData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [formGroupStyles.formGroup];
    }
}
