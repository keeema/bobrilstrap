import * as b from 'bobril';
import { elem, IBaseData, IElementBobrilNode } from './element';
import { button, IButtonData, ButtonOption } from './button';
import { span } from './span';
import { createDictionary, mergeToChildren } from './bobrilHelpers';

export interface IAlertData extends IBaseData {
    context: AlertContext;
    dismissButton?: IButtonData;
    nativeDismiss?: boolean;
    animation?: boolean;
    onClosed?: () => void;
}

interface IAlertCtx extends b.IBobrilCtx {
    data: IAlertData;
}

export enum AlertContext {
    Success,
    Warning,
    Danger,
    Info
}

export const alertStyles = {
    alert: b.styleDef('alert'),
    alertSuccess: b.styleDef('alert-success'),
    alertInfo: b.styleDef('alert-info'),
    alertDanger: b.styleDef('alert-danger'),
    alertWarning: b.styleDef('alert-warning'),
    alertDismissable: b.styleDef('alert-dismissible'),
    alertLink: b.styleDef('alert-link'),
    fade: b.styleDef('fade'),
    in: b.styleDef('in')
};

export const alertContextStyles = createDictionary<AlertContext, b.IBobrilStyle>();
alertContextStyles(AlertContext.Success, alertStyles.alertSuccess);
alertContextStyles(AlertContext.Info, alertStyles.alertInfo);
alertContextStyles(AlertContext.Danger, alertStyles.alertDanger);
alertContextStyles(AlertContext.Warning, alertStyles.alertWarning);

export const alert = b.createDerivedComponent<IAlertData>(elem, {
    id: 'bobrilstrap-alert',
    render(ctx: IAlertCtx, me: IElementBobrilNode) {
        b.style(me, alertStyles.alert);
        b.style(me, alertContextStyles(ctx.data.context));
        me.attrs['role'] = 'alert';

        const animation = ctx.data.animation === undefined || ctx.data.animation;
        const nativeDismiss = ctx.data.nativeDismiss === undefined || ctx.data.nativeDismiss;

        if (ctx.data.dismissButton) {
            b.style(
                me,
                alertStyles.alertDismissable,
                !!animation && alertStyles.fade,
                !!animation && alertStyles.in,
            );

            const buttonData = b.assign({}, ctx.data.dismissButton, <IButtonData>{
                alert: true,
                data: nativeDismiss
                    ? b.assign({}, ctx.data.dismissButton.data, { dismiss: 'alert' })
                    : ctx.data.dismissButton.data,
                option: ButtonOption.Close
            });

            if (!buttonData.children) {
                mergeToChildren(buttonData, span({ aria: { hidden: true } }, '×'), true);
            }

            const dismissButton = button(buttonData);
            mergeToChildren(me, dismissButton, true);
        }
    },
    postInitDom(ctx: IAlertCtx, _me: b.IBobrilNode, element: HTMLElement) {
        $(element).on('closed.bs.alert', () => { if (ctx.data.onClosed) ctx.data.onClosed(); });
    }
});

export default alert;