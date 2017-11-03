import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { embedResponsiveStyles } from "./embedResponsive";

export interface IObjectData extends IBaseData {
  dataSrc: string;
  type?: string;
  width?: number;
  height?: number;
  embedResponsive?: boolean;
}

interface IObjectCtx extends b.IBobrilCtx {
  data: IObjectData;
}

export const Object = b.createDerivedComponent<IObjectData>(Elem, {
  id: "bobrilstrap-object",
  render(ctx: IObjectCtx, me: IElementBobrilNode) {
    me.tag = "object";
    b.style(
      me,
      !!ctx.data.embedResponsive && embedResponsiveStyles.embedResponsiveItem
    );
    me.attrs["data"] = ctx.data.dataSrc;

    if (ctx.data.type !== undefined) me.attrs["type"] = ctx.data.type;
    if (ctx.data.height !== undefined) me.attrs["height"] = ctx.data.height;
    if (ctx.data.width !== undefined) me.attrs["width"] = ctx.data.width;
  }
});

export default Object;
