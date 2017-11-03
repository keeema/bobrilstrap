import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { Button, IButtonData, ButtonOption } from "./button";
import { Span } from "./span";
import {
  createDictionary,
  mergeToChildren,
  IDictionary
} from "./bobrilHelpers";

export interface IAlertData extends IBaseData {
  context: AlertContext;
  dismissButton?: IButtonData;
  nativeDismiss?: boolean;
  animation?: boolean;
  onClosed?: () => void;
  timeout?: number;
}

interface IAlertCtx extends b.IBobrilCtx {
  data: IAlertData;
  timeoutId?: number;
  visible: boolean;
}

export enum AlertContext {
  Success,
  Warning,
  Danger,
  Info
}

export const alertStyles = {
  alert: b.styleDef("alert"),
  alertSuccess: b.styleDef("alert-success"),
  alertInfo: b.styleDef("alert-info"),
  alertDanger: b.styleDef("alert-danger"),
  alertWarning: b.styleDef("alert-warning"),
  alertDismissable: b.styleDef("alert-dismissible"),
  alertLink: b.styleDef("alert-link"),
  fade: b.styleDef("fade"),
  in: b.styleDef("in")
};

export const alertContextStyles: IDictionary<
  AlertContext,
  b.IBobrilStyle
> = createDictionary<AlertContext, b.IBobrilStyle>();
alertContextStyles(AlertContext.Success, alertStyles.alertSuccess);
alertContextStyles(AlertContext.Info, alertStyles.alertInfo);
alertContextStyles(AlertContext.Danger, alertStyles.alertDanger);
alertContextStyles(AlertContext.Warning, alertStyles.alertWarning);

export const Alert = b.createDerivedComponent<IAlertData>(Elem, {
  id: "bobrilstrap-alert",
  init(ctx: IAlertCtx) {
    ctx.visible = true;
  },
  render(ctx: IAlertCtx, me: IElementBobrilNode) {
    b.style(me, alertStyles.alert);
    b.style(me, alertContextStyles(ctx.data.context));
    me.attrs["role"] = "alert";

    const animation = ctx.data.animation === undefined || ctx.data.animation;
    const nativeDismiss =
      ctx.data.nativeDismiss === undefined || ctx.data.nativeDismiss;

    if (ctx.data.dismissButton) {
      b.style(
        me,
        alertStyles.alertDismissable,
        !!animation && alertStyles.fade,
        !!animation && alertStyles.in
      );

      const buttonData = b.assign({}, ctx.data.dismissButton, {
        alert: true,
        data: nativeDismiss
          ? b.assign({}, ctx.data.dismissButton.data, { dismiss: "alert" })
          : ctx.data.dismissButton.data,
        option: ButtonOption.Close
      } as IButtonData);

      if (!buttonData.children) {
        mergeToChildren(
          buttonData,
          Span({ aria: { hidden: true } }, "×"),
          true
        );
      }

      const dismissButton = Button(buttonData);
      mergeToChildren(me, dismissButton, true);
    }
  },
  postInitDom(ctx: IAlertCtx, _me: b.IBobrilNode, element: HTMLElement) {
    $(element).on("closed.bs.Alert", () => {
      ctx.visible = false;
      if (ctx.data.onClosed) ctx.data.onClosed();
    });

    if (ctx.data.timeout) {
      ctx.timeoutId = setTimeout(
        () => dismissOnTimeout(ctx, element),
        ctx.data.timeout
      );
    }
  },
  destroy(ctx: IAlertCtx) {
    if (ctx.timeoutId) clearTimeout(ctx.timeoutId);
  }
});

export default Alert;

function dismissOnTimeout(ctx: IAlertCtx, element: HTMLElement) {
  if (ctx.timeoutId) {
    clearTimeout(ctx.timeoutId);
    ctx.timeoutId = 0;
  }
  if (ctx.visible) $(element).alert("close");
}
