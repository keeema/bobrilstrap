import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardHeaderStyles = {
    cardHeader: b.styleDef("card-header"),
};

export interface ICardHeaderData extends IBaseElementDataWithChildren {}

export class CardHeader extends BaseElement<ICardHeaderData> {
    static id: string = "bobrilstrap-card-header";
    readonly componentProperties: (keyof ICardHeaderData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardHeaderStyles.cardHeader];
    }
}
