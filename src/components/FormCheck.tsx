import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formCheckStyles = {
    formCheck: b.styleDef("form-check"),
};

export interface IFormCheckData extends IBaseElementDataWithChildren {}

export class FormCheck extends BaseElement<IFormCheckData> {
    static id: string = "bobrilstrap-form-check";
    componentProperties = (): (keyof IFormCheckData)[] => [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [formCheckStyles.formCheck];
    }
}
