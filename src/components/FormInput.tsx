import { Tags } from "../../utils/tags";
import { FormControlBase, IFormControlBaseData, InputType } from "./FormControlBase";

export const formInputStyles = {};
export interface IFormInputData extends IFormControlBaseData {
    type: InputType | "datalist";
    list?: string;
}

export class FormInput extends FormControlBase<IFormInputData> {
    static id: string = "bobrilstrap-form-input";
    componentProperties = (): (keyof IFormInputData)[] =>
        this.data.type === "datalist" ? [...super.componentProperties(), "type"] : super.componentProperties();

    get tag(): Tags {
        return "input";
    }
}
