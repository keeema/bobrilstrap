import * as b from "bobril";
import { pick } from "../../helpers/objectHelper";
import { createDictionary } from "../../helpers/dict";
import { IBaseElementData, BaseElement } from "../components/baseElement";

export type SpanScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColSpan = true | "auto" | SpanScale;

interface IColElementData {
    span?: SpanScale;
    offset?: SpanScale;

    sm?: ColSpan;
    md?: ColSpan;
    lg?: ColSpan;
    xl?: ColSpan;

    "offset-sm"?: SpanScale;
    "offset-md"?: SpanScale;
    "offset-lg"?: SpanScale;
    "offset-xl"?: SpanScale;
}

export const spanScale: SpanScale[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const colSpanScale: ColSpan[] = [...spanScale, true, "auto"];

export const colStyles = {
    col: b.styleDef("col"),

    span: createDictionary(spanScale.map((value) => [value, b.styleDef(`col-${value}`)])),
    offset: createDictionary(spanScale.map((value) => [value, b.styleDef(`offset-${value}`)])),

    sm: createDictionary(colSpanScale.map((value) => [value, b.styleDef(value !== true ? `col-sm-${value}` : "col-sm")])),
    md: createDictionary(colSpanScale.map((value) => [value, b.styleDef(value !== true ? `col-md-${value}` : "col-md")])),
    lg: createDictionary(colSpanScale.map((value) => [value, b.styleDef(value !== true ? `col-lg-${value}` : "col-lg")])),
    xl: createDictionary(colSpanScale.map((value) => [value, b.styleDef(value !== true ? `col-xl-${value}` : "col-xl")])),

    smOffset: createDictionary(spanScale.map((value) => [value, b.styleDef(`offset-sm-${value}`)])),
    mdOffset: createDictionary(spanScale.map((value) => [value, b.styleDef(`offset-md-${value}`)])),
    lgOffset: createDictionary(spanScale.map((value) => [value, b.styleDef(`offset-lg-${value}`)])),
    xlOffset: createDictionary(spanScale.map((value) => [value, b.styleDef(`offset-xl-${value}`)])),
};

export type IColData = IColElementData & IBaseElementData;
export class Col extends BaseElement<IColData> {
    static id: string = "bobrilstrap-col";
    readonly componentProperties: (keyof IColElementData)[] = [
        "span",
        "offset",
        "sm",
        "md",
        "lg",
        "xl",
        "offset-sm",
        "offset-md",
        "offset-lg",
        "offset-xl",
    ];

    get componentSpecificStyles(): b.IBobrilStyleArray {
        const colData = pick(this.data, ...this.componentProperties);
        colData;
        return [
            this.hasNoSpanStyle && colStyles.col,
            colData.span && colStyles.span(colData.span),
            colData.offset && colStyles.offset(colData.offset),
            colData.sm && colStyles.sm(colData.sm),
            colData.md && colStyles.md(colData.md),
            colData.lg && colStyles.lg(colData.lg),
            colData.xl && colStyles.xl(colData.xl),
            colData["offset-sm"] && colStyles.smOffset(colData["offset-sm"]),
            colData["offset-md"] && colStyles.mdOffset(colData["offset-md"]),
            colData["offset-lg"] && colStyles.lgOffset(colData["offset-lg"]),
            colData["offset-xl"] && colStyles.xlOffset(colData["offset-xl"]),
        ];
    }

    private get hasNoSpanStyle(): boolean {
        return !(this.data.span || this.data.sm || this.data.md || this.data.lg || this.data.xl);
    }
}
