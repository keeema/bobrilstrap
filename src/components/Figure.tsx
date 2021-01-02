import * as b from "bobril";
import { Tags } from "../../utils/tags";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";
import { FigureCaption } from "./FigureCaption";

export const figureStyles = {
    figure: b.styleDef("figure"),
    image: b.styleDef("figure-img"),
};

export interface IFigureData extends IBaseElementDataWithChildren {}

export class Figure extends BaseElement<IFigureData> {
    static id: string = "bobrilstrap-figure";
    static Caption = FigureCaption;

    get tag(): Tags {
        return "figure";
    }

    componentProperties(): (keyof IFigureData)[] {
        return [];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [figureStyles.figure];
    }
}
