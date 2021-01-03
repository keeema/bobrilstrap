import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formTextStyles = {
    formText: b.styleDef("form-text"),
};

export interface IFormTextData extends IBaseElementDataWithChildren {}

export class FormText extends BaseElement<IFormTextData> {
    static id: string = "bobrilstrap-form-text";
    componentProperties = (): (keyof IFormTextData)[] => [];

    get tag(): Tags {
        return "small";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [formTextStyles.formText];
    }
}
