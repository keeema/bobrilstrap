import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import Size from 'bobrilstrap-size';

interface IData extends IBaseData {
    size?: Size;
    count?: number;
    cols?: IColType | IColType[];
    offsets?: IColType | IColType[];
    pushes?: IColType | IColType[];
    pulls?: IColType | IColType[];
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

interface IColType {
    size: Size;
    count: number;
}

interface IColStyles {
    [key: string]: { [key: number]: b.IBobrilStyle };
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-col',
    render(ctx: ICtx, me: b.IBobrilNode) {
        applySimplyDefinedStyle(me, ctx.data);
        applyCmpSyles(me, ctx.data.cols, colStyles);
        applyCmpSyles(me, ctx.data.offsets, colOffsetStyles);
        applyCmpSyles(me, ctx.data.pushes, colPushStyles);
        applyCmpSyles(me, ctx.data.pulls, colPullStyles);
    }
});

export default create;
export { Size };

export let colStyles = getStyles((size, i) => `col-${size}-${i}`);
export let colOffsetStyles = getStyles((size, i) => `col-${size}-offset-${i}`);
export let colPushStyles = getStyles((size, i) => `col-${size}-push-${i}`);
export let colPullStyles = getStyles((size, i) => `col-${size}-pull-${i}`);

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

function applySimplyDefinedStyle(me: b.IBobrilNode, data: IData) {
    if (isStyleAvailable(colStyles, data)) {
        b.style(me, getStyle(colStyles, data));
    }
}

function getCmpStyles(colTypes: IColType | IColType[], stylesSource: IColStyles): b.IBobrilStyle[] {
    let cols: IColType[] = getColTypeArray(colTypes);

    let styles: b.IBobrilStyle[] = cols
        .filter(col => isStyleAvailable(stylesSource, col))
        .map(col => getStyle(stylesSource, col));

    return styles;
}

function getColTypeArray(colTypes: IColType | IColType[]): IColType[] {
    return colTypes
        ? colTypes instanceof Array
            ? colTypes
            : <IColType[]>[colTypes]
        : [];
}

function isStyleAvailable(stylesSource: IColStyles, col: IColType | IData): boolean {
    return col.size && col.count
        && !!stylesSource[col.size.toString()] && !!stylesSource[col.size.toString()][col.count];
}

function getStyle(stylesSource: IColStyles, col: IColType | IData) {
    return stylesSource[col.size.toString()][col.count];
}