import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export const accordionButtonStyles = {
    accordionButton: b.styleDef("accordion-button"),
    collapsed: b.styleDef("collapsed"),
};

export interface IAccordionButtonData extends IBaseElementDataWithChildren {
    collapsed: boolean;
}

export class AccordionButton extends BaseElement<IAccordionButtonData> {
    static id: string = "bobrilstrap-accordion-button";

    get tag(): Tags {
        return "button";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return {
            ...super.componentAdditionalAttributes(),
            type: this.data["type"] || "button",
            "aria-expanded": !this.data.collapsed,
        };
    }

    componentProperties(): (keyof IAccordionButtonData)[] {
        return ["collapsed"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [accordionButtonStyles.accordionButton, this.data.collapsed && accordionButtonStyles.collapsed];
    }
}
