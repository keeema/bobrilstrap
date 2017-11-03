import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export const wellStyles = {
  well: b.styleDef("well"),
  lg: b.styleDef("well-lg"),
  sm: b.styleDef("well-sm")
};

export enum WellSize {
  Lg,
  Sm
}

export const wellSizeStyles: IDictionary<
  WellSize,
  b.IBobrilStyle
> = createDictionary<WellSize, b.IBobrilStyle>();
wellSizeStyles(WellSize.Lg, wellStyles.lg);
wellSizeStyles(WellSize.Sm, wellStyles.sm);

export interface IWellData extends IBaseData {
  size?: WellSize;
}

interface IWellCtx extends b.IBobrilCtx {
  data: IWellData;
}

export const Well = b.createDerivedComponent<IWellData>(Elem, {
  id: "bobrilstrap-well",
  render(ctx: IWellCtx, me: b.IBobrilNode) {
    b.style(me, wellStyles.well);
    b.style(me, ctx.data.size !== undefined && wellSizeStyles(ctx.data.size));
  }
});

export default Well;
