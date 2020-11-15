import { FormControlBase, IFormControlBaseData, InputType } from "./FormControlBase";

export const formInputStyles = {};
export interface IFormInputData extends IFormControlBaseData {
    type: InputType;
}

export class FormInput extends FormControlBase<IFormInputData> {
    static id: string = "bobrilstrap-form-input";
    componentProperties = (): (keyof IFormInputData)[] => [...super.componentProperties() /* , type */];

    get tag(): string {
        return "input";
    }
}
