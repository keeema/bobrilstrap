import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export interface IFormLabelData extends IBaseElementDataWithChildren {}

export class FormLabel extends BaseElement<IFormLabelData> {
    static id: string = "bobrilstrap-form-label";
    readonly componentProperties: (keyof IFormLabelData)[] = [];

    get tag(): string {
        return "label";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
