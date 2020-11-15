import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { FormCheck } from "./FormCheck";
import { FormGroup } from "./FormGroup";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";
import { FormOption } from "./FormOption";
import { FormSelect } from "./FormSelect";
import { FormText } from "./FormText";
import { FormTextarea } from "./FormTextarea";

export const formStyles = {};

export interface IFormData extends IBaseElementDataWithChildren {}

export class Form extends BaseElement<IFormData> {
    static id: string = "bobrilstrap-form";
    static Check = FormCheck;
    static Group = FormGroup;
    static Input = FormInput;
    static Label = FormLabel;
    static Option = FormOption;
    static Select = FormSelect;
    static Text = FormText;
    static Textarea = FormTextarea;

    componentProperties = (): (keyof IFormData)[] => [];

    get tag(): string {
        return "form";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
