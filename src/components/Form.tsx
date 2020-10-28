import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";
import { FormGroup } from "./FormGroup";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";

export const formStyles = {};

export interface IFormData extends IBaseElementData {}

export class Form extends BaseElement<IFormData> {
    static id: string = "bobrilstrap-form";
    static Group = FormGroup;
    static Input = FormInput;
    static Label = FormLabel;

    readonly componentProperties: (keyof IFormData)[] = [];

    get tag(): string {
        return "form";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
