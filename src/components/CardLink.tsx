import * as b from "bobril";
import { IBaseElementData, BaseElement, IAllAttrs } from "./BaseElement";

export const cardLinkStyles = {
    cardLink: b.styleDef("card-link"),
};

export interface ICardLinkData extends IBaseElementData {
    href?: string;
}

export class CardLink extends BaseElement<ICardLinkData> {
    static id: string = "bobrilstrap-card-link";
    readonly componentProperties: (keyof ICardLinkData)[] = [
        /* , "href" */
    ];

    get tag(): string {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { href: this.data.href ?? "javascript:void(0)" };
    }
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardLinkStyles.cardLink];
    }
}
