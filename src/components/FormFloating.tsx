import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formFloatingStyles = {
    formFloating: b.styleDef("form-floating"),
};

export interface IFormFloatingData extends IBaseElementDataWithChildren {}

export class FormFloating extends BaseElement<IFormFloatingData> {
    static id: string = "bobrilstrap-form-floating";

    componentProperties(): (keyof IFormFloatingData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [formFloatingStyles.formFloating];
    }
}
