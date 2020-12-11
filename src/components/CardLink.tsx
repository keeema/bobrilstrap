import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement, IAllAttrs } from "./BaseElement";

export const cardLinkStyles = {
    cardLink: b.styleDef("card-link"),
};

export interface ICardLinkData extends IBaseElementDataWithChildren {
    href?: string;
}

export class CardLink extends BaseElement<ICardLinkData> {
    static id: string = "bobrilstrap-card-link";
    componentProperties = (): (keyof ICardLinkData)[] => [
        /* , "href" */
    ];

    get tag(): Tags {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { ...super.componentAdditionalAttributes(), href: this.data.href ?? "javascript:void(0)" };
    }
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardLinkStyles.cardLink];
    }
}
