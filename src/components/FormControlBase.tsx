import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createFilledDictionary } from "../../helpers/dict";

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

export const formControlBaseStyles = {
    formControl: b.styleDef("form-control"),
    plainText: b.styleDef("form-control-plaintext"),
    formCheckInput: b.styleDef("form-check-input"),
    formControlFile: b.styleDef("form-control-file"),
    formControlRange: b.styleDef("form-control-range"),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`form-control-${breakpoint}`)])),
};

export const specificInputStyles: { [key: string]: b.IBobrilStyle } = {
    checkbox: formControlBaseStyles.formCheckInput,
    radio: formControlBaseStyles.formCheckInput,
    file: formControlBaseStyles.formControlFile,
    range: formControlBaseStyles.formControlRange,
};

export interface IFormControlBaseData extends IBaseElementDataWithChildren {
    size?: Breakpoint;
    "plain-text"?: boolean;
}

export interface IFormControlBaseWithTypeData extends IFormControlBaseData {
    type?: InputType;
}

export abstract class FormControlBase<TData extends IFormControlBaseData> extends BaseElement<TData> {
    static id: string = "bobrilstrap-form-control-base";
    componentProperties(): (keyof TData)[] {
        return ["size", "plain-text"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        const data = this.data as IFormControlBaseWithTypeData;
        return [
            (data.type && specificInputStyles[data.type]) ||
                (this.data["plain-text"] && formControlBaseStyles.plainText) ||
                formControlBaseStyles.formControl,
            this.data.size && formControlBaseStyles.sizes(this.data.size),
            ,
        ];
    }
}
