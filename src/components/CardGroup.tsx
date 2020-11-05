import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const cardGroupStyles = {
    cardGroup: b.styleDef("card-group"),
};

export interface ICardGroupData extends IBaseElementData {}

export class CardGroup extends BaseElement<ICardGroupData> {
    static id: string = "bobrilstrap-card-group";
    readonly componentProperties: (keyof ICardGroupData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardGroupStyles.cardGroup];
    }
}
