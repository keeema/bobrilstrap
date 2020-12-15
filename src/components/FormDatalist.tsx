import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formDatalistStyles = {};

export interface IFormDatalistData extends IBaseElementDataWithChildren {}

export class FormDatalist extends BaseElement<IFormDatalistData> {
    static id: string = "bobrilstrap-form-datalist";

    get tag(): Tags {
        return "datalist";
    }

    componentProperties(): (keyof IFormDatalistData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
