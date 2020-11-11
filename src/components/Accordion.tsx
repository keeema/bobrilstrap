import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const accordionStyles = {
    accordion: b.styleDef("accordion"),
};

export interface IAccordionData extends IBaseElementDataWithChildren {}

export class Accordion extends BaseElement<IAccordionData> {
    static id: string = "bobrilstrap-accordion";
    readonly componentProperties: (keyof IAccordionData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [accordionStyles.accordion];
    }
}
