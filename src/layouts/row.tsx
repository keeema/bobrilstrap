import * as b from "bobril";
import { IBaseElementData, BaseElement, sizeScale, SizeScale } from "../../index";
import { pick } from "../../helpers/objectHelper";

export const rowStyles = {
    row: b.styleDef("row"),
    span: new Map<SizeScale | undefined, b.IBobrilStyle>(
        sizeScale.map((value) => [value, value ? b.styleDef(`row-cols-${value}`) : undefined])
    ),
    sm: new Map<SizeScale | undefined, b.IBobrilStyle>(
        sizeScale.map((value) => [value, value ? b.styleDef(`row-cols-sm-${value}`) : undefined])
    ),
    md: new Map<SizeScale | undefined, b.IBobrilStyle>(
        sizeScale.map((value) => [value, value ? b.styleDef(`row-cols-md-${value}`) : undefined])
    ),
    lg: new Map<SizeScale | undefined, b.IBobrilStyle>(
        sizeScale.map((value) => [value, value ? b.styleDef(`row-cols-lg-${value}`) : undefined])
    ),
    xl: new Map<SizeScale | undefined, b.IBobrilStyle>(
        sizeScale.map((value) => [value, value ? b.styleDef(`row-cols-xl-${value}`) : undefined])
    ),
};

export interface IRowElementData {
    span?: SizeScale;
    sm?: SizeScale;
    md?: SizeScale;
    lg?: SizeScale;
    xl?: SizeScale;
}

export type IRowData = IRowElementData & IBaseElementData;

export class Row extends BaseElement<IRowData> {
    static id: string = "bobrilstrap-row";
    readonly componentProperties: (keyof IRowElementData)[] = ["span", "sm", "md", "lg", "xl"];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        const rowData = pick(this.data, ...this.componentProperties);
        return [
            rowStyles.row,
            rowStyles.span.get(rowData.span),
            rowStyles.sm.get(rowData.sm),
            rowStyles.md.get(rowData.md),
            rowStyles.lg.get(rowData.lg),
            rowStyles.xl.get(rowData.xl),
        ];
    }
}
