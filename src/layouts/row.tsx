import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";

export const rowStyles = {
    row: b.styleDef("row"),
};

export interface IRowData extends IBaseElementData {}

export class Row extends BaseElement<IRowData> {
    static id: string = "bobrilstrap-row";
    readonly componentProperties: (keyof IRowData)[] = [];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [rowStyles.row];
    }
}
