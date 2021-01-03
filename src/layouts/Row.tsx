import * as b from "bobril";
import { IBaseElementDataWithChildren, BaseElement } from "../components/BaseElement";
import { createDictionary } from "../../utils/dict";
import { Span, spanScale } from "./Col";

export const rowStyles = {
    row: b.styleDef("row"),
    span: createDictionary(spanScale.map((value) => [value, b.styleDef(`row-cols-${value}`)])),
    sm: createDictionary(spanScale.map((value) => [value, b.styleDef(`row-cols-sm-${value}`)])),
    md: createDictionary(spanScale.map((value) => [value, b.styleDef(`row-cols-md-${value}`)])),
    lg: createDictionary(spanScale.map((value) => [value, b.styleDef(`row-cols-lg-${value}`)])),
    xl: createDictionary(spanScale.map((value) => [value, b.styleDef(`row-cols-xl-${value}`)])),
};

export interface IRowElementData {
    span?: Span;
    sm?: Span;
    md?: Span;
    lg?: Span;
    xl?: Span;
}

export type IRowData = IRowElementData & IBaseElementDataWithChildren;

export class Row extends BaseElement<IRowData> {
    static id: string = "bobrilstrap-row";
    componentProperties = (): (keyof IRowData)[] => ["span", "sm", "md", "lg", "xl"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        const rowData = this.data;
        return [
            rowStyles.row,
            rowData.span && rowStyles.span(rowData.span),
            rowData.sm && rowStyles.sm(rowData.sm),
            rowData.md && rowStyles.md(rowData.md),
            rowData.lg && rowStyles.lg(rowData.lg),
            rowData.xl && rowStyles.xl(rowData.xl),
        ];
    }
}
