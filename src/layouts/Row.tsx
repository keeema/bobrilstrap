import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../components/BaseElement";
import { pick } from "../../helpers/objectHelper";
import { createDictionary } from "../../helpers/dict";
import { SpanBase, spanBaseScale } from "./Col";

export const rowStyles = {
    row: b.styleDef("row"),
    noGutters: b.styleDef("no-gutters"),
    span: createDictionary(spanBaseScale.map((value) => [value, b.styleDef(`row-cols-${value}`)])),
    sm: createDictionary(spanBaseScale.map((value) => [value, b.styleDef(`row-cols-sm-${value}`)])),
    md: createDictionary(spanBaseScale.map((value) => [value, b.styleDef(`row-cols-md-${value}`)])),
    lg: createDictionary(spanBaseScale.map((value) => [value, b.styleDef(`row-cols-lg-${value}`)])),
    xl: createDictionary(spanBaseScale.map((value) => [value, b.styleDef(`row-cols-xl-${value}`)])),
};

export interface IRowElementData {
    span?: SpanBase;
    sm?: SpanBase;
    md?: SpanBase;
    lg?: SpanBase;
    xl?: SpanBase;
    "no-gutters"?: boolean;
}

export type IRowData = IRowElementData & IBaseElementData;

export class Row extends BaseElement<IRowData> {
    static id: string = "bobrilstrap-row";
    readonly componentProperties: (keyof IRowElementData)[] = ["span", "sm", "md", "lg", "xl", "no-gutters"];

    componentSpecificStyles(): b.IBobrilStyleArray {
        const rowData = pick(this.data, ...this.componentProperties);
        return [
            rowStyles.row,
            rowData.span && rowStyles.span(rowData.span),
            rowData.sm && rowStyles.sm(rowData.sm),
            rowData.md && rowStyles.md(rowData.md),
            rowData.lg && rowStyles.lg(rowData.lg),
            rowData.xl && rowStyles.xl(rowData.xl),
            rowData["no-gutters"] && rowStyles.noGutters,
        ];
    }
}
