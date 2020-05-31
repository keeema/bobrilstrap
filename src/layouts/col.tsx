import * as b from "bobril";
import { IBaseElementData, BaseElement } from "../../index";
import { pick } from "../../helpers/objectHelper";

export type SizeScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColSize = boolean | "auto" | SizeScale;

interface IColElementData {
    span?: SizeScale;
    offset?: SizeScale;

    sm?: ColSize;
    md?: ColSize;
    lg?: ColSize;
    xl?: ColSize;

    "offset-sm"?: ColSize;
    "offset-md"?: ColSize;
    "offset-lg"?: ColSize;
    "offset-xl"?: ColSize;
}

const scale: SizeScale[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const colSizeScale: ColSize[] = [...scale, "auto"];

export const colStyles = {
    col: b.styleDef("col"),

    span: new Map<SizeScale | undefined, b.IBobrilStyle>(scale.map((value) => [value, b.styleDef(`col-${value}`)])),
    offset: new Map<SizeScale | undefined, b.IBobrilStyle>(scale.map((value) => [value, b.styleDef(`offset-${value}`)])),

    sm: new Map<ColSize | undefined, b.IBobrilStyle>(
        colSizeScale.map((value) => [value, b.styleDef(value ? `col-sm-${value}` : "col-sm")])
    ),
    md: new Map<ColSize | undefined, b.IBobrilStyle>(
        colSizeScale.map((value) => [value, b.styleDef(value ? `col-md-${value}` : "col-md")])
    ),
    lg: new Map<ColSize | undefined, b.IBobrilStyle>(
        colSizeScale.map((value) => [value, b.styleDef(value ? `col-lg-${value}` : "col-lg")])
    ),
    xl: new Map<ColSize | undefined, b.IBobrilStyle>(
        colSizeScale.map((value) => [value, b.styleDef(value ? `col-xl-${value}` : "col-xl")])
    ),

    smOffset: new Map<ColSize | undefined, b.IBobrilStyle>(
        scale.map((value) => [value, b.styleDef(value ? `offset-sm-${value}` : "col-sm")])
    ),
    mdOffset: new Map<ColSize | undefined, b.IBobrilStyle>(
        scale.map((value) => [value, b.styleDef(value ? `offset-md-${value}` : "col-md")])
    ),
    lgOffset: new Map<ColSize | undefined, b.IBobrilStyle>(
        scale.map((value) => [value, b.styleDef(value ? `offset-lg-${value}` : "col-lg")])
    ),
    xlOffset: new Map<ColSize | undefined, b.IBobrilStyle>(
        scale.map((value) => [value, b.styleDef(value ? `offset-xl-${value}` : "col-xl")])
    ),
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
            colStyles.span.get(colData.span),
            colStyles.offset.get(colData.offset),
            colStyles.sm.get(colData.sm),
            colStyles.md.get(colData.md),
            colStyles.xl.get(colData.xl),
            colStyles.smOffset.get(colData["offset-sm"]),
            colStyles.mdOffset.get(colData["offset-md"]),
            colStyles.lgOffset.get(colData["offset-lg"]),
            colStyles.xlOffset.get(colData["offset-xl"]),
        ];
    }

    private get hasNoSpanStyle(): boolean {
        return !(this.data.span || this.data.sm || this.data.lg || this.data.xl);
    }
}
