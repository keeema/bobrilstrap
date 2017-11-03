import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { helpers } from "./helpers";
import { mergeToChildren } from "./bobrilHelpers";

export interface ILabeldData extends IBaseData {
  for?: string;
  srOnly?: boolean;
  controlLabel?: boolean;
  title?: string;
}

interface ICtx extends b.IBobrilCtx {
  data: ILabeldData;
}

export const labelStyles = {
  srOnly: helpers.srOnly,
  controlLabel: b.styleDef("control-label")
};

export const Label = b.createDerivedComponent<ILabeldData>(Elem, {
  id: "bobrilstrap-label",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = "label";

    b.style(me, !!ctx.data.srOnly && labelStyles.srOnly);
    b.style(me, !!ctx.data.controlLabel && labelStyles.controlLabel);

    if (ctx.data.for) me.attrs["for"] = ctx.data.for;

    if (ctx.data.title) mergeToChildren(me, ctx.data.title);

    delete me.attrs["title"];
  }
});

export default Label;
