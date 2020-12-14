import * as b from "bobril";
import { Collapse } from "./Collapse";

export const accordionCollapseStyles = {
    accordionCollapse: b.styleDef("accordion-collapse"),
};

export class AccordionCollapse extends Collapse {
    static id: string = "bobrilstrap-accordionCollapse";

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [...super.componentSpecificStyles(), accordionCollapseStyles.accordionCollapse];
    }
}
