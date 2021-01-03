import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const accordionHeaderStyles = {
    accordionHeader: b.styleDef("accordion-header"),
};

export interface IAccordionHeaderData extends IBaseElementDataWithChildren {}

export class AccordionHeader extends BaseElement<IAccordionHeaderData> {
    static id: string = "bobrilstrap-accordion-header";

    get tag(): Tags {
        return "h2";
    }

    componentProperties(): (keyof IAccordionHeaderData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [accordionHeaderStyles.accordionHeader];
    }
}
