import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export enum SpanLabelContext {
  Default,
  Primary,
  Success,
  Info,
  Warning,
  Danger
}

export const spanStyles = {
  label: b.styleDef("label"),
  labelDefault: b.styleDef("label-default"),
  labelPrimary: b.styleDef("label-primary"),
  labelSuccess: b.styleDef("label-success"),
  labelInfo: b.styleDef("label-info"),
  labelWarning: b.styleDef("label-warning"),
  labelDanger: b.styleDef("label-danger")
};

export const spanLabelContextStyles: IDictionary<
  SpanLabelContext,
  b.IBobrilStyle
> = createDictionary<SpanLabelContext, b.IBobrilStyle>();
spanLabelContextStyles(SpanLabelContext.Default, spanStyles.labelDefault);
spanLabelContextStyles(SpanLabelContext.Primary, spanStyles.labelPrimary);
spanLabelContextStyles(SpanLabelContext.Success, spanStyles.labelSuccess);
spanLabelContextStyles(SpanLabelContext.Info, spanStyles.labelInfo);
spanLabelContextStyles(SpanLabelContext.Warning, spanStyles.labelWarning);
spanLabelContextStyles(SpanLabelContext.Danger, spanStyles.labelDanger);

export interface ISpanData extends IBaseData {
  labelContext?: SpanLabelContext;
}

interface ISpanCtx extends b.IBobrilCtx {
  data: ISpanData;
}

export const Span = b.createDerivedComponent<ISpanData>(Elem, {
  id: "bobrilstrap-span",
  render(ctx: ISpanCtx, me: b.IBobrilNode) {
    me.tag = "span";
    b.style(me, ctx.data.labelContext !== undefined && spanStyles.label);
    b.style(
      me,
      ctx.data.labelContext !== undefined &&
        spanLabelContextStyles(ctx.data.labelContext)
    );
  }
});

export default Span;
