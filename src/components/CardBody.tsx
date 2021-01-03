import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const cardBodyStyles = {
    cardBody: b.styleDef("card-body"),
};

export interface ICardBodyData extends IBaseElementDataWithChildren {}

export class CardBody extends BaseElement<ICardBodyData> {
    static id: string = "bobrilstrap-card-body";
    componentProperties = (): (keyof ICardBodyData)[] => [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardBodyStyles.cardBody];
    }
}
