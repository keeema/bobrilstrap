import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { Span } from "./span";
import { helpers } from "./helpers";
import {
  createDictionary,
  mergeToChildren,
  IDictionary
} from "./bobrilHelpers";

export enum ProgressBarContext {
  Success,
  Info,
  Warning,
  Danger
}

export interface IProgressBarData extends IBaseData {
  context?: ProgressBarContext;
  value: number;
  active?: boolean;
  striped?: boolean;
  srOnlyText?: string;
  minWidth?: string | number;
}

interface IProgressBarCtx extends b.IBobrilCtx {
  data: IProgressBarData;
}

export const progressBarStyles = {
  progressBar: b.styleDef("progress-bar"),
  progressBarSuccess: b.styleDef("progress-bar-success"),
  progressBarInfo: b.styleDef("progress-bar-info"),
  progressBarWarning: b.styleDef("progress-bar-warning"),
  progressBarDanger: b.styleDef("progress-bar-danger"),
  progressBarStriped: b.styleDef("progress-bar-striped"),
  active: b.styleDef("active")
};

export const progressBarContextStyles: IDictionary<
  ProgressBarContext,
  b.IBobrilStyle
> = createDictionary<ProgressBarContext, b.IBobrilStyle>();
progressBarContextStyles(
  ProgressBarContext.Success,
  progressBarStyles.progressBarSuccess
);
progressBarContextStyles(
  ProgressBarContext.Info,
  progressBarStyles.progressBarInfo
);
progressBarContextStyles(
  ProgressBarContext.Warning,
  progressBarStyles.progressBarWarning
);
progressBarContextStyles(
  ProgressBarContext.Danger,
  progressBarStyles.progressBarDanger
);

export const ProgressBar = b.createDerivedComponent<IProgressBarData>(Elem, {
  id: "bobrilstrap-progress-bar",
  render(ctx: IProgressBarCtx, me: IElementBobrilNode) {
    b.style(me, progressBarStyles.progressBar);
    b.style(me, !!ctx.data.active && progressBarStyles.active);
    b.style(me, !!ctx.data.striped && progressBarStyles.progressBarStriped);
    b.style(
      me,
      ctx.data.context !== undefined &&
        progressBarContextStyles(ctx.data.context)
    );
    b.style(me, { width: `${ctx.data.value}%` });
    b.style(me, !!ctx.data.minWidth, { minWidth: ctx.data.minWidth });
    me.attrs["role"] = "progressbar";
    mergeToChildren(
      me,
      ctx.data.srOnlyText &&
        Span({ style: helpers.srOnly }, ctx.data.srOnlyText),
      true
    );
  }
});

export default ProgressBar;
