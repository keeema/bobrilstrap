import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formLabelStyles = {
    formCheckLabel: b.styleDef("form-check-label"),
};

export interface IFormLabelData extends IBaseElementDataWithChildren {
    "form-check"?: boolean;
}

export class FormLabel extends BaseElement<IFormLabelData> {
    static id: string = "bobrilstrap-form-label";
    readonly componentProperties: (keyof IFormLabelData)[] = ["form-check"];

    get tag(): string {
        return "label";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [this.data["form-check"] && formLabelStyles.formCheckLabel];
    }
}
