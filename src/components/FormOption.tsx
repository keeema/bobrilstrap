import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const formOptionStyles = {};

export interface IFormOptionData extends IBaseElementDataWithChildren {}

export class FormOption extends BaseElement<IFormOptionData> {
    static id: string = "bobrilstrap-form-option";
    componentProperties = (): (keyof IFormOptionData)[] => [];

    get tag(): string {
        return "option";
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [];
    }
}
