import * as b from "bobril";
import { AccordionBody } from "./AccordionBody";
import { AccordionButton } from "./AccordionButton";
import { AccordionCollapse } from "./AccordionCollapse";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionItem } from "./AccordionItem";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const accordionStyles = {
    accordion: b.styleDef("accordion"),
    flush: b.styleDef("accordion-flush"),
};

export interface IAccordionData extends IBaseElementDataWithChildren {
    flush?: boolean;
}

export class Accordion extends BaseElement<IAccordionData> {
    static id: string = "bobrilstrap-accordion";

    static Body = AccordionBody;
    static Button = AccordionButton;
    static Collapse = AccordionCollapse;
    static Header = AccordionHeader;
    static Item = AccordionItem;

    componentProperties = (): (keyof IAccordionData)[] => ["flush"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [accordionStyles.accordion, this.data.flush && accordionStyles.flush];
    }
}
