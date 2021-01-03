import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const accordionBodyStyles = {
    accordionBody: b.styleDef("accordion-body"),
};

export interface IAccordionBodyData extends IBaseElementDataWithChildren {}

export class AccordionBody extends BaseElement<IAccordionBodyData> {
    static id: string = "bobrilstrap-accordion-body";

    componentProperties(): (keyof IAccordionBodyData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [accordionBodyStyles.accordionBody];
    }
}
