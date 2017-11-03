import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { embedResponsiveStyles } from "./embedResponsive";

export interface IIFrameData extends IBaseData {
  src: string;
  embedResponsive?: boolean;
}

interface IIFrameCtx extends b.IBobrilCtx {
  data: IIFrameData;
}

export const IFrame = b.createDerivedComponent<IIFrameData>(Elem, {
  id: "bobrilstrap-iframe",
  render(ctx: IIFrameCtx, me: IElementBobrilNode) {
    me.tag = "iframe";
    me.attrs["src"] = ctx.data.src;
    b.style(
      me,
      !!ctx.data.embedResponsive && embedResponsiveStyles.embedResponsiveItem
    );
  }
});

export default IFrame;
