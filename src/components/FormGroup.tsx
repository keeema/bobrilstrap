import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formGroupStyles = {
    formGroup: b.styleDef("form-group"),
    row: b.styleDef("row"),
};

export interface IFormGroupData extends IBaseElementDataWithChildren {
    row?: boolean;
}

export class FormGroup extends BaseElement<IFormGroupData> {
    static id: string = "bobrilstrap-form-group";
    componentProperties = (): (keyof IFormGroupData)[] => ["row"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [formGroupStyles.formGroup, this.data.row && formGroupStyles.row];
    }
}
