import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { CardBody } from "./CardBody";
import { CardColumns } from "./CardColumns";
import { CardDeck } from "./CardDeck";
import { CardFooter } from "./CardFooter";
import { CardGroup } from "./CardGroup";
import { CardHeader } from "./CardHeader";
import { CardImage } from "./CardImage";
import { CardLink } from "./CardLink";
import { CardSubtitle } from "./CardSubtitle";
import { CardText } from "./CardText";
import { CardTitle } from "./CardTitle";

export const cardStyles = {
    card: b.styleDef("card"),
};

export interface ICardData extends IBaseElementDataWithChildren {}

export class Card extends BaseElement<ICardData> {
    static id: string = "bobrilstrap-card";

    static Body = CardBody;
    static Columns = CardColumns;
    static Deck = CardDeck;
    static Footer = CardFooter;
    static Group = CardGroup;
    static Header = CardHeader;
    static Image = CardImage;
    static Link = CardLink;
    static Subtitle = CardSubtitle;
    static Text = CardText;
    static Title = CardTitle;

    readonly componentProperties: (keyof ICardData)[] = [];

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [cardStyles.card];
    }
}
