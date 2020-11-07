import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formGroupStyles = {
    formGroup: b.styleDef("form-group"),
};

export interface IFormGroupData extends IBaseElementDataWithChildren {}

export class FormGroup extends BaseElement<IFormGroupData> {
    static id: string = "bobrilstrap-form-group";
    readonly componentProperties: (keyof IFormGroupData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [formGroupStyles.formGroup];
    }
}
