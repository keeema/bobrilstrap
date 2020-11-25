import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const customControlStyles = {
    customControl: b.styleDef("custom-control"),
    inline: b.styleDef("custom-control-inline"),
    checkbox: b.styleDef("custom-checkbox"),
    radio: b.styleDef("custom-radio"),
    switch: b.styleDef("custom-switch"),
    file: b.styleDef("custom-file"),
};

export type CustomControlType = "checkbox" | "radio" | "switch" | "file";

export interface ICustomControlData extends IBaseElementDataWithChildren {
    type: CustomControlType;
    inline?: boolean;
}

export class CustomControl extends BaseElement<ICustomControlData> {
    static id: string = "bobrilstrap-custom-control";

    componentProperties(): (keyof ICustomControlData)[] {
        return ["type", "inline"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [
            this.data.type !== "file" && customControlStyles.customControl,
            customControlStyles[this.data.type],
            this.data.inline && customControlStyles.inline,
        ];
    }
}
