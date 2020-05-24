import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";

const styles = {
    col: b.styleDef("col"),
};

export interface IColData extends IBaseElementData {}

export class Col extends BaseElement<IColData> {
    static id: string = "bobrilstrap-col";
    readonly componentProperties: (keyof IColData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [styles.col];
    }
}
