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
    customControlInput: b.styleDef("custom-control-input"),
    plainText: b.styleDef("form-control-plaintext"),
    formCheckInput: b.styleDef("form-check-input"),
    formControlFile: b.styleDef("form-control-file"),
    formControlRange: b.styleDef("form-control-range"),
    customControlRange: b.styleDef("custom-control-range"),
    customSelect: b.styleDef("custom-select"),
    customSelectSizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`custom-select-${breakpoint}`)])),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`form-control-${breakpoint}`)])),
    valid: b.styleDef("is-valid"),
    invalid: b.styleDef("is-invalid"),
};

export const specificInputStyles: { [key: string]: b.IBobrilStyle } = {
    checkbox: formControlBaseStyles.formCheckInput,
    radio: formControlBaseStyles.formCheckInput,
    file: formControlBaseStyles.formControlFile,
    range: formControlBaseStyles.formControlRange,
};

export const specificCustomInputStyles: { [key: string]: b.IBobrilStyle } = {
    range: formControlBaseStyles.customControlRange,
};

export interface IFormControlBaseData extends IBaseElementDataWithChildren {
    size?: Breakpoint;
    "plain-text"?: boolean;
    valid?: boolean;
    custom?: boolean;
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
        return [
            this.tryGetSpecificStyle || this.tryGetCustomStyle || this.tryGetPlainText || formControlBaseStyles.formControl,
            this.data.size && formControlBaseStyles.sizes(this.data.size),
            this.data.valid === true && formControlBaseStyles.valid,
            this.data.valid === false && formControlBaseStyles.invalid,
        ];
    }

    get tryGetSpecificStyle(): b.IBobrilStyle {
        const data = this.data as IFormControlBaseWithTypeData;
        return data.type && (data.custom ? specificCustomInputStyles[data.type] : specificInputStyles[data.type]);
    }
    get tryGetCustomStyle(): b.IBobrilStyle {
        return this.data.custom && (this.tag === "select" ? this.customSelectStyle : formControlBaseStyles.customControlInput);
    }

    get tryGetPlainText(): b.IBobrilStyle {
        return this.data["plain-text"] && formControlBaseStyles.plainText;
    }

    get customSelectStyle(): b.IBobrilStyle {
        return this.data.size ? formControlBaseStyles.customSelectSizes(this.data.size) : formControlBaseStyles.customSelect;
    }
}
