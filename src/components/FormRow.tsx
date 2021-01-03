import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formRowStyles = {
    formRow: b.styleDef("form-row"),
};

export interface IFormRowData extends IBaseElementDataWithChildren {}

export class FormRow extends BaseElement<IFormRowData> {
    static id: string = "bobrilstrap-form-row";

    componentProperties(): (keyof IFormRowData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [formRowStyles.formRow];
    }
}
