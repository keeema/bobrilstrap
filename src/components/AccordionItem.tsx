import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const accordionItemStyles = {
    accordionItem: b.styleDef("accordion-item"),
};

export interface IAccordionItemData extends IBaseElementDataWithChildren {}

export class AccordionItem extends BaseElement<IAccordionItemData> {
    static id: string = "bobrilstrap-accordion-item";

    componentProperties(): (keyof IAccordionItemData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [accordionItemStyles.accordionItem];
    }
}
