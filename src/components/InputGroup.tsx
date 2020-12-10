import * as b from "bobril";
import { createFilledDictionary } from "../../helpers/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { InputGroupAppend } from "./InputGroupAppend";
import { InputGroupPrepend } from "./InputGroupPrepend";
import { InputGroupText } from "./InputGroupText";

export const inputGroupStyles = {
    inputGroup: b.styleDef("input-group"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`input-group-${breakpoint}`)])),
    valid: b.styleDef("is-valid"),
    invalid: b.styleDef("is-invalid"),
    hasValidation: b.styleDef("has-validation"),
};

export interface IInputGroupData extends IBaseElementDataWithChildren {
    size?: Breakpoint;
    valid?: boolean;
}

export class InputGroup extends BaseElement<IInputGroupData> {
    static id: string = "bobrilstrap-input-group";
    static Append = InputGroupAppend;
    static Prepend = InputGroupPrepend;
    static Text = InputGroupText;

    componentProperties = (): (keyof IInputGroupData)[] => ["size", "valid"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            inputGroupStyles.inputGroup,
            this.data.size && inputGroupStyles.sizes(this.data.size),
            this.data.valid === true && inputGroupStyles.valid,
            this.data.valid === false && inputGroupStyles.invalid,
            this.data.valid !== undefined && inputGroupStyles.hasValidation,
        ];
    }
}
