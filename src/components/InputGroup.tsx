import * as b from "bobril";
import { createFilledDictionary } from "../../helpers/dict";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { IBaseElementData, BaseElement } from "./BaseElement";
import { InputGroupAppend } from "./InputGroupAppend";
import { InputGroupPrepend } from "./InputGroupPrepend";
import { InputGroupText } from "./InputGroupText";

export const inputGroupStyles = {
    inputGroup: b.styleDef("input-group"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`input-group-${breakpoint}`)])),
};

export interface IInputGroupData extends IBaseElementData {
    size?: Breakpoint;
}

export class InputGroup extends BaseElement<IInputGroupData> {
    static id: string = "bobrilstrap-input-group";
    static Append = InputGroupAppend;
    static Prepend = InputGroupPrepend;
    static Text = InputGroupText;
    readonly componentProperties: (keyof IInputGroupData)[] = ["size"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [inputGroupStyles.inputGroup, this.data.size && inputGroupStyles.sizes(this.data.size)];
    }
}
