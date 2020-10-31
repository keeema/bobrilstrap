import * as b from "bobril";
import { IBaseElementData, BaseElement, IAllAttrs } from "./BaseElement";

export const alertLinkStyles = {
    alertLink: b.styleDef("alert-link"),
};

export interface IAlertLinkData extends IBaseElementData {
    href?: string;
}

export class AlertLink extends BaseElement<IAlertLinkData> {
    static id: string = "bobrilstrap-alert-link";
    readonly componentProperties: (keyof IAlertLinkData)[] = [
        /* "href" */
    ];

    get tag(): string {
        return "a";
    }

    componentAdditionalAttributes(): IAllAttrs {
        return { href: this.data.href ?? "javascript:void(0)" };
    }
    componentSpecificStyles(): b.IBobrilStyleArray {
        return [alertLinkStyles.alertLink];
    }
}
