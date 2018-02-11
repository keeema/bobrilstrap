import * as b from "bobril";
import {
  Elem,
  IBaseData,
  IElementBobrilNode,
  IElementBobrilCacheNode
} from "./element";

export interface ITextareaData extends IBaseData<string> {
  value?: string;
  placeholder?: string;
  rows?: number;
  fixedSize?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: ITextareaData;
  value: string;
  me: IElementBobrilCacheNode;
}

export const textareaStyles = {
  formControl: b.styleDef("form-control"),
  fixedSize: b.styleDef({ resize: "none" }, undefined, "textarea-fixed-size")
};

export const Textarea = b.createOverridingComponent<ITextareaData>(Elem, {
  id: "bobrilstrap-textare",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.component.super.render(ctx, me);

    me.tag = "textarea";

    if (ctx.data.value !== undefined) {
      ctx.value = ctx.data.value;
    }

    me.attrs.value = ctx.value;
    b.style(me, textareaStyles.formControl);

    b.style(me, !!ctx.data.fixedSize && textareaStyles.fixedSize);

    if (ctx.data.rows) me.attrs["rows"] = ctx.data.rows.toString();

    if (ctx.data.placeholder)
      me.attrs["placeholder"] = ctx.data.placeholder.toString();

    if (ctx.data.disabled) me.attrs["disabled"] = "disabled";

    if (ctx.data.readonly) me.attrs["readonly"] = "readonly";
  },
  onChange(ctx: ICtx, value: string): void {
    ctx.value = value;
    ctx.me.component.super.onChange(ctx, value);
  }
});

export default Textarea;
