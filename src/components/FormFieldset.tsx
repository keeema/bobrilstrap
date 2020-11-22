import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formFieldsetStyles = {};

export interface IFormFieldsetData extends IBaseElementDataWithChildren {}

export class FormFieldset extends BaseElement<IFormFieldsetData> {
    static id: string = "bobrilstrap-form-fieldset";

    get tag(): string {
        return "fieldset";
    }

    componentProperties(): (keyof IFormFieldsetData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
