import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export interface IFormLabelData extends IBaseElementData {}

export class FormLabel extends BaseElement<IFormLabelData> {
    static id: string = "bobrilstrap-form-label";
    readonly componentProperties: (keyof IFormLabelData)[] = [];

    get tag(): string {
        return "label";
    }

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
