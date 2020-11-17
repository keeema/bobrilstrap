import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formCheckStyles = {
    formCheck: b.styleDef("form-check"),
    inline: b.styleDef("form-check-inline"),
};

export interface IFormCheckData extends IBaseElementDataWithChildren {
    inline?: boolean;
}

export class FormCheck extends BaseElement<IFormCheckData> {
    static id: string = "bobrilstrap-form-check";
    componentProperties = (): (keyof IFormCheckData)[] => ["inline"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [formCheckStyles.formCheck, this.data.inline && formCheckStyles.inline];
    }
}
