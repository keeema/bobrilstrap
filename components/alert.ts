import * as b from 'bobril';
import { elem, IBaseData, IElementBobrilNode } from './element';
import { createDictionary } from './bobrilHelpers';

export interface IAlertData extends IBaseData {
    context: AlertContext;
}

interface ICtx extends b.IBobrilCtx {
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
    alertWarning: b.styleDef('alert-warning')
};

export const alertContextStyles = createDictionary<AlertContext, b.IBobrilStyle>();
alertContextStyles(AlertContext.Success, alertStyles.alertSuccess);
alertContextStyles(AlertContext.Info, alertStyles.alertInfo);
alertContextStyles(AlertContext.Danger, alertStyles.alertDanger);
alertContextStyles(AlertContext.Warning, alertStyles.alertWarning);

export const alert = b.createDerivedComponent<IAlertData>(elem, {
    id: 'bobrilstrap-alert',
    render(ctx: ICtx, me: IElementBobrilNode) {
        b.style(me, alertStyles.alert);
        b.style(me, alertContextStyles(ctx.data.context));
        me.attrs['role'] = 'alert';
    }
});

export default alert;