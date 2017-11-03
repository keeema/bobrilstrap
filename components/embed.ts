import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { embedResponsiveStyles } from "./embedResponsive";

export interface IEmbedData extends IBaseData {
  src: string;
  type?: string;
  width?: number;
  height?: number;
  embedResponsive?: boolean;
}

interface IEmbedCtx extends b.IBobrilCtx {
  data: IEmbedData;
}

export const Embed = b.createDerivedComponent<IEmbedData>(Elem, {
  id: "bobrilstrap-embed",
  render(ctx: IEmbedCtx, me: IElementBobrilNode) {
    me.tag = "embed";
    b.style(
      me,
      !!ctx.data.embedResponsive && embedResponsiveStyles.embedResponsiveItem
    );
    me.attrs["src"] = ctx.data.src;

    if (ctx.data.type !== undefined) me.attrs["type"] = ctx.data.type;
    if (ctx.data.height !== undefined) me.attrs["height"] = ctx.data.height;
    if (ctx.data.width !== undefined) me.attrs["width"] = ctx.data.width;
  }
});

export default Embed;
