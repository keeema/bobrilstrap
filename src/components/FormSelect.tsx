import { Tags } from "../../helpers/tags";
import { IAttrs } from "./BaseElement";
import { FormControlBase, IFormControlBaseData } from "./FormControlBase";

export const formSelectStyles = {};

export interface IFormSelectData extends IFormControlBaseData {
    multiple?: boolean;
    rows?: number;
}

export class FormSelect extends FormControlBase<IFormSelectData> {
    static id: string = "bobrilstrap-form-select";
    componentProperties = (): (keyof IFormSelectData)[] => [...super.componentProperties() /* multiple , */, "rows"];

    componentAdditionalAttributes(): IAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            size: this.data.rows,
        };
    }

    get tag(): Tags {
        return "select";
    }
}
