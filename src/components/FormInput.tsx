import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export type InputType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

export const formInputStyles = {
    formControl: b.styleDef("form-control"),
    formCheckInput: b.styleDef("form-check-input"),
};

export interface IFormInputData extends IBaseElementDataWithChildren {
    type: InputType;
}

export class FormInput extends BaseElement<IFormInputData> {
    static id: string = "bobrilstrap-form-input";
    readonly componentProperties: (keyof IFormInputData)[] = [
        /* type */
    ];

    get tag(): string {
        return "input";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data.type === "checkbox" ? formInputStyles.formCheckInput : formInputStyles.formControl];
    }
}
