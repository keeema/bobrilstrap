import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { FormCheck } from "./FormCheck";
import { FormFieldset } from "./FormFieldset";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";
import { FormOption } from "./FormOption";
import { FormSelect } from "./FormSelect";
import { FormText } from "./FormText";
import { FormTextarea } from "./FormTextarea";

export const formStyles = {
    needsValidation: b.styleDef("needs-validation"),
    wasValidated: b.styleDef("was-validated"),
};

export interface IFormData extends IBaseElementDataWithChildren {
    "needs-validation"?: boolean;
    "was-validated"?: boolean;
    novalidate?: boolean;
}

export class Form extends BaseElement<IFormData> {
    static id: string = "bobrilstrap-form";
    static Check = FormCheck;
    static Fieldset = FormFieldset;
    static Input = FormInput;
    static Label = FormLabel;
    static Option = FormOption;
    static Select = FormSelect;
    static Text = FormText;
    static Textarea = FormTextarea;

    componentProperties = (): (keyof IFormData)[] => ["needs-validation", "was-validated" /* , "novalidate" */];

    get tag(): Tags {
        return "form";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data["needs-validation"] && formStyles.needsValidation, this.data["was-validated"] && formStyles.wasValidated];
    }
}
