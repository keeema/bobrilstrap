import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { FormControlBase, IFormControlBaseData, InputType } from "./FormControlBase";

export const formInputStyles = {
    btnCheck: b.styleDef("btn-check"),
};
export interface IFormInputData extends IFormControlBaseData {
    type: InputType | "datalist";
    list?: string;
    "toggle-button"?: boolean;
}

export class FormInput extends FormControlBase<IFormInputData> {
    static id: string = "bobrilstrap-form-input";

    componentProperties = (): (keyof IFormInputData)[] => {
        const props = [...super.componentProperties(), "toggle-button"];
        this.data.type === "datalist" && props.push("type");
        return props;
    };

    get tag(): Tags {
        return "input";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [...super.componentSpecificStyles(), this.data["toggle-button"] && formInputStyles.btnCheck];
    }
}
