import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardBodyStyles = {
    cardBody: b.styleDef("card-body"),
};

export interface ICardBodyData extends IBaseElementData {}

export class CardBody extends BaseElement<ICardBodyData> {
    static id: string = "bobrilstrap-card-body";
    readonly componentProperties: (keyof ICardBodyData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardBodyStyles.cardBody];
    }
}
