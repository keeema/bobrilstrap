import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const figureCaptionStyles = {
    figureCaption: b.styleDef("figure-caption"),
};

export interface IFigureCaptionData extends IBaseElementDataWithChildren {}

export class FigureCaption extends BaseElement<IFigureCaptionData> {
    static id: string = "bobrilstrap-figure-caption";

    get tag(): Tags {
        return "figcaption";
    }

    componentProperties(): (keyof IFigureCaptionData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [figureCaptionStyles.figureCaption];
    }
}
