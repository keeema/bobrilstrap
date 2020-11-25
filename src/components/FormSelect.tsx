import { Tags } from "../../helpers/tags";
import { FormControlBase, IFormControlBaseData } from "./FormControlBase";

export const formSelectStyles = {};

export interface IFormSelectData extends IFormControlBaseData {
    multiple?: boolean;
}

export class FormSelect extends FormControlBase<IFormSelectData> {
    static id: string = "bobrilstrap-form-select";
    componentProperties = (): (keyof IFormSelectData)[] => [...super.componentProperties() /* multiple , */];

    get tag(): Tags {
        return "select";
    }
}
