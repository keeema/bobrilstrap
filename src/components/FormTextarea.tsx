import { Tags } from "../../helpers/tags";
import { FormControlBase, IFormControlBaseData } from "./FormControlBase";

export const formTextareaStyles = {};

export interface IFormTextareaData extends IFormControlBaseData {}

export class FormTextarea extends FormControlBase<IFormTextareaData> {
    static id: string = "bobrilstrap-form-textarea";
    componentProperties = (): (keyof IFormTextareaData)[] => [];

    get tag(): Tags {
        return "textarea";
    }
}
