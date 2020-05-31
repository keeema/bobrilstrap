import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";

const styles = {
    col: b.styleDef("col"),
};

export type IColSize = boolean | "auto" | number;

//TODO: vygenerování stylů

export interface IColData extends IBaseElementData {
    span?: number;
    xs?: IColSize;
    sm?: IColSize;
    md?: IColSize;
    lg?: IColSize;

    offsetXs?: number;
    offsetSm?: number;
    offsetMd?: number;
    offsetLg?: number;
}

export class Col extends BaseElement<IColData> {
    static id: string = "bobrilstrap-col";
    readonly componentProperties: (keyof IColData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [styles.col];
    }
}
