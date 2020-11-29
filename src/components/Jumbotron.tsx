import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "./BaseElement";

export const jumbotronStyles = {
    jumbotron: b.styleDef("jumbotron"),
    jumbotronFluid: b.styleDef("jumbotron-fluid"),
};

export interface IJumbotronData extends IBaseElementDataWithChildren {
    fluid?: boolean;
}

export class Jumbotron extends BaseElement<IJumbotronData> {
    static id: string = "bobrilstrap-jumbotron";

    componentProperties(): (keyof IJumbotronData)[] {
        return ["fluid"];
    }

    componentSpecificStyles(): b.IBobrilStyleArray {
        return [jumbotronStyles.jumbotron, this.data.fluid && jumbotronStyles.jumbotronFluid];
    }
}
