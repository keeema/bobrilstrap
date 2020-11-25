import * as b from "bobril";
import { Tags } from "../../helpers/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { FormCheck } from "./FormCheck";
import { FormFieldset } from "./FormFieldset";
import { FormGroup } from "./FormGroup";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";
import { FormOption } from "./FormOption";
import { FormRow } from "./FormRow";
import { FormSelect } from "./FormSelect";
import { FormText } from "./FormText";
import { FormTextarea } from "./FormTextarea";

export const formStyles = {
    inline: b.styleDef("form-inline"),
    needsValidation: b.styleDef("needs-validation"),
    wasValidated: b.styleDef("was-validated"),
};

export interface IFormData extends IBaseElementDataWithChildren {
    inline?: boolean;
    "needs-validation"?: boolean;
    "was-validated"?: boolean;
    novalidate?: boolean;
}

export class Form extends BaseElement<IFormData> {
    static id: string = "bobrilstrap-form";
    static Check = FormCheck;
    static Group = FormGroup;
    static Fieldset = FormFieldset;
    static Input = FormInput;
    static Label = FormLabel;
    static Option = FormOption;
    static Row = FormRow;
    static Select = FormSelect;
    static Text = FormText;
    static Textarea = FormTextarea;

    componentProperties = (): (keyof IFormData)[] => ["inline", "needs-validation", "was-validated" /* , "novalidate" */];

    get tag(): Tags {
        return "form";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            this.data.inline && formStyles.inline,
            this.data["needs-validation"] && formStyles.needsValidation,
            this.data["was-validated"] && formStyles.wasValidated,
        ];
    }
}
