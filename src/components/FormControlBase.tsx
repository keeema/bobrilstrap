import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { Breakpoint, breakpoints } from "../layouts/breakpoint";
import { createFilledDictionary } from "../../utils/dict";

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
    formSelect: b.styleDef("form-select"),
    formControlRange: b.styleDef("form-range"),
    formControlColor: b.styleDef("form-control-color"),
    customSelectSizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`form-select-${breakpoint}`)])),
    sizes: createFilledDictionary(breakpoints.map((breakpoint) => [breakpoint, b.styleDef(`form-control-${breakpoint}`)])),
    valid: b.styleDef("is-valid"),
    invalid: b.styleDef("is-invalid"),
};

export const specificInputStyles: { [key: string]: b.IBobrilStyle } = {
    checkbox: formControlBaseStyles.formCheckInput,
    radio: formControlBaseStyles.formCheckInput,
    range: formControlBaseStyles.formControlRange,
};

export const additionalSpecificInputStyles: { [key: string]: b.IBobrilStyle } = {
    color: formControlBaseStyles.formControlColor,
};

export interface IFormControlBaseData extends IBaseElementDataWithChildren {
    size?: Breakpoint;
    valid?: boolean;
    "plain-text"?: boolean;
    "no-form-control"?: boolean;
}

export interface IFormControlBaseWithTypeData extends IFormControlBaseData {
    type?: InputType;
}

export abstract class FormControlBase<TData extends IFormControlBaseData> extends BaseElement<TData> {
    static id: string = "bobrilstrap-form-control-base";
    componentProperties(): (keyof TData)[] {
        return ["size", "plain-text" /* , "type" */, "valid", "no-form-control"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            this.tryGetSpecificStyle || this.tryGetPlainText || (!this.data["no-form-control"] && formControlBaseStyles.formControl),
            this.tryGetAdditionalSpecificStyle,
            this.data.size &&
                (this.recognizedTag === "select"
                    ? formControlBaseStyles.customSelectSizes(this.data.size)
                    : formControlBaseStyles.sizes(this.data.size)),
            this.data.valid === true && formControlBaseStyles.valid,
            this.data.valid === false && formControlBaseStyles.invalid,
        ];
    }

    get tryGetSpecificStyle(): b.IBobrilStyle {
        const data = this.data as IFormControlBaseWithTypeData;
        if (this.recognizedTag === "select") {
            return formControlBaseStyles.formSelect;
        }
        return data.type && !this.data["no-form-control"] && specificInputStyles[data.type];
    }

    get tryGetAdditionalSpecificStyle(): b.IBobrilStyle {
        const data = this.data as IFormControlBaseWithTypeData;
        return data.type && !this.data["no-form-control"] && additionalSpecificInputStyles[data.type];
    }

    get tryGetPlainText(): b.IBobrilStyle {
        return this.data["plain-text"] && formControlBaseStyles.plainText;
    }
}
