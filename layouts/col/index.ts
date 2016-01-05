import * as b from 'bobril';
import * as elem from 'bobrilstrap-element';

interface IData extends elem.IData {
    cols: IColType | IColType[];
    offsets?: IColType | IColType[];
    pushes?: IColType | IColType[];
    pulls?: IColType | IColType[];
}

interface ICtx extends elem.ICtx {
    data: IData;
}

export enum DeviceSize { xs = 0, sm = 1, md = 2, lg = 3 };

interface IColType {
    deviceSize: DeviceSize;
    count: number;
}

interface IColStyles {
    [key: number]: { [key: number]: b.IBobrilStyle };
}

export default b.createDerivedComponent<IData>(elem.default, {
    render(ctx: ICtx, me: b.IBobrilNode) {
        applyCmpSyles(me, ctx.data.cols, colStyles);
        applyCmpSyles(me, ctx.data.offsets, colOffsetStyles);
        applyCmpSyles(me, ctx.data.pushes, colPushStyles);
        applyCmpSyles(me, ctx.data.pulls, colPullStyles);
    }
});

export let colStyles = getStyles((size, i) => `col-${size}-${i}`);
export let colOffsetStyles = getStyles((size, i) => `col-${size}-offset-${i}`);
export let colPushStyles = getStyles((size, i) => `col-${size}-push-${i}`);
export let colPullStyles = getStyles((size, i) => `col-${size}-pull-${i}`);

function getStyles(decorator: (size: string, count: number) => string): IColStyles {
    var result: IColStyles = {};

    Object.keys(DeviceSize).forEach(size => {
        result[size] = {};
        for (var i = 1; i <= 12; i++) {
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

function getCmpStyles(colTypes: IColType | IColType[], stylesSource: IColStyles): b.IBobrilStyle[] {
    let cols: IColType[] =
        colTypes
            ? colTypes instanceof Array
                ? colTypes
                : <IColType[]>[colTypes]
            : [];

    let styles: b.IBobrilStyle[] = cols
        .filter(col => stylesSource[DeviceSize[col.deviceSize]] && stylesSource[DeviceSize[col.deviceSize]][col.count])
        .map(col => stylesSource[DeviceSize[col.deviceSize]][col.count]);

    return styles;
}
