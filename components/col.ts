import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { Size } from "./size";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface IColData extends IBaseData {
  size?: Size;
  span?: number;
  cols?: IColType | IColType[];
  offsets?: IColType | IColType[];
  pushes?: IColType | IColType[];
  pulls?: IColType | IColType[];
}

interface ICtx extends b.IBobrilCtx {
  data: IColData;
}

export interface IColType {
  size: Size;
  span: number;
}

type IColStyles = IDictionary<Size, IDictionary<number, b.IBobrilStyle>>;

export const Col: b.IComponentFactory<IColData> = b.createDerivedComponent<
  IColData
>(Elem, {
  id: "bobrilstrap-col",
  render(ctx: ICtx, me: b.IBobrilNode) {
    applySimplyDefinedStyle(me, ctx.data);
    applyCmpSyles(me, ctx.data.cols, colStyles);
    applyCmpSyles(me, ctx.data.offsets, colOffsetStyles);
    applyCmpSyles(me, ctx.data.pushes, colPushStyles);
    applyCmpSyles(me, ctx.data.pulls, colPullStyles);
  }
});

export default Col;

export const colStyles = getStyles(
  (size, i) => `col-${Size[size].toLowerCase()}-${i}`
);
export const colOffsetStyles = getStyles(
  (size, i) => `col-${Size[size].toLowerCase()}-offset-${i}`
);
export const colPushStyles = getStyles(
  (size, i) => `col-${Size[size].toLowerCase()}-push-${i}`
);
export const colPullStyles = getStyles(
  (size, i) => `col-${Size[size].toLowerCase()}-pull-${i}`
);

function getStyles(
  decorator: (size: Size, span: number) => string
): IColStyles {
  const result: IColStyles = createDictionary<
    Size,
    IDictionary<number, b.IBobrilStyle>
  >();

  Object.keys(Size).forEach(size => {
    let castedValue = parseInt(size, 10);
    if (!isNaN(castedValue)) {
      result(castedValue, createDictionary());
      for (let i = 1; i <= 12; i++) {
        result(castedValue)(i, b.styleDef(decorator(castedValue, i)));
      }
    }
  });

  return result;
}

function applyCmpSyles(
  me: b.IBobrilNode,
  colTypes?: IColType | IColType[],
  stylesSource?: IColStyles
) {
  if (colTypes === undefined || stylesSource === undefined) return;

  let styles = getCmpStyles(colTypes, stylesSource);
  if (styles.length === 0) return;

  b.style(me, styles);
}

function applySimplyDefinedStyle(me: b.IBobrilNode, data: IColData) {
  if (isStyleAvailable(colStyles, data)) {
    b.style(me, getStyle(colStyles, data));
  }
}

function getCmpStyles(
  colTypes: IColType | IColType[],
  stylesSource: IColStyles
): b.IBobrilStyle[] {
  let cols: IColType[] = getColTypeArray(colTypes);

  let styles: b.IBobrilStyle[] = cols
    .filter(colType => isStyleAvailable(stylesSource, colType))
    .map(colType => getStyle(stylesSource, colType));

  return styles;
}

function getColTypeArray(colTypes: IColType | IColType[]): IColType[] {
  return colTypes
    ? colTypes instanceof Array ? colTypes : [colTypes] as IColType[]
    : [];
}

function isStyleAvailable(
  stylesSource: IColStyles,
  colType: IColType | IColData
): boolean {
  return (
    colType.size !== undefined &&
    !!colType.span &&
    !!stylesSource(colType.size) &&
    !!stylesSource(colType.size)(colType.span)
  );
}

function getStyle(
  stylesSource: IColStyles,
  colType: IColType | IColData
): b.IBobrilStyle {
  return stylesSource(colType.size === undefined ? 1 : colType.size)(
    colType.span === undefined ? 1 : colType.span
  );
}
