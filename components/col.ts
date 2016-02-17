import * as b from 'bobril';
import elem, { IBaseData } from './element';
import Size from './size';

interface IColData extends IBaseData {
    size?: Size;
    count?: number;
    cols?: IColType | IColType[];
    offsets?: IColType | IColType[];
    pushes?: IColType | IColType[];
    pulls?: IColType | IColType[];
}

interface ICtx extends b.IBobrilCtx {
    data: IColData;
}

interface IColType {
    size: Size;
    count: number;
}

interface IColStyles {
    [key: string]: { [key: number]: b.IBobrilStyle };
}

export const col = b.createDerivedComponent<IColData>(elem, {
    id: 'bobrilstrap-col',
    render(ctx: ICtx, me: b.IBobrilNode) {
        applySimplyDefinedStyle(me, ctx.data);
        applyCmpSyles(me, ctx.data.cols, colStyles);
        applyCmpSyles(me, ctx.data.offsets, colOffsetStyles);
        applyCmpSyles(me, ctx.data.pushes, colPushStyles);
        applyCmpSyles(me, ctx.data.pulls, colPullStyles);
    }
});

export default col;

export const colStyles = getStyles((size, i) => `col-${size}-${i}`);
export const colOffsetStyles = getStyles((size, i) => `col-${size}-offset-${i}`);
export const colPushStyles = getStyles((size, i) => `col-${size}-push-${i}`);
export const colPullStyles = getStyles((size, i) => `col-${size}-pull-${i}`);

function getStyles(decorator: (size: Size, count: number) => string): IColStyles {
    var result: IColStyles = {};

    Object.keys(Size).forEach(size => {
        result[size] = {};
        for (let i = 1; i <= 12; i++) {
            result[size][i] = b.styleDef(decorator(size, i));
        }
    });

    return result;
}

function applyCmpSyles(me: b.IBobrilNode, colTypes: IColType | IColType[], stylesSource: IColStyles) {
    let styles = getCmpStyles(colTypes, stylesSource);
    if (styles.length === 0)
        return;

    b.style(me, styles);
}

function applySimplyDefinedStyle(me: b.IBobrilNode, data: IColData) {
    if (isStyleAvailable(colStyles, data)) {
        b.style(me, getStyle(colStyles, data));
    }
}

function getCmpStyles(colTypes: IColType | IColType[], stylesSource: IColStyles): b.IBobrilStyle[] {
    let cols: IColType[] = getColTypeArray(colTypes);

    let styles: b.IBobrilStyle[] = cols
        .filter(colType => isStyleAvailable(stylesSource, colType))
        .map(colType => getStyle(stylesSource, colType));

    return styles;
}

function getColTypeArray(colTypes: IColType | IColType[]): IColType[] {
    return colTypes
        ? colTypes instanceof Array
            ? colTypes
            : <IColType[]>[colTypes]
        : [];
}

function isStyleAvailable(stylesSource: IColStyles, colType: IColType | IColData): boolean {
    return colType.size && colType.count
        && !!stylesSource[colType.size.toString()] && !!stylesSource[colType.size.toString()][colType.count];
}

function getStyle(stylesSource: IColStyles, colType: IColType | IColData) {
    return stylesSource[colType.size.toString()][colType.count];
}