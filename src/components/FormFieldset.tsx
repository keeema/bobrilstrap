import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formFieldsetStyles = {};

export interface IFormFieldsetData extends IBaseElementDataWithChildren {}

export class FormFieldset extends BaseElement<IFormFieldsetData> {
    static id: string = "bobrilstrap-form-fieldset";

    get tag(): Tags {
        return "fieldset";
    }

    componentProperties(): (keyof IFormFieldsetData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
