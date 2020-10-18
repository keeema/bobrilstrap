import * as b from "bobril";
import { IBaseElementData, BaseElement } from "./BaseElement";

export const alertLinkStyles = {
    alertLink: b.styleDef("alert-link"),
};

export interface IAlertLinkData extends IBaseElementData {}

export class AlertLink extends BaseElement<IAlertLinkData> {
    static id: string = "bobrilstrap-alert-link";
    readonly componentProperties: (keyof IAlertLinkData)[] = [];

    get tag(): string {
        return "a";
    }
    get componentSpecificStyles(): b.IBobrilStyleArray {
        return [alertLinkStyles.alertLink];
    }
}
